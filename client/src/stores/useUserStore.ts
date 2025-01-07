import { create } from "zustand";
import { UserProps } from "../types/types";
import { persist } from "zustand/middleware";
import { axiosInstance } from "../axios/axios";

interface UserStoreState {
  user: UserProps | null;
  isSubmitting: boolean;
  setUser: (user: UserProps | null) => void;
  login: (user: UserProps) => Promise<UserProps | undefined>;
  logout: () => Promise<UserProps | undefined>;
  refreshToken: () => Promise<boolean>;
}

export const useUserStore = create<UserStoreState>()(
  persist(
    (set) => ({
      user: null,
      isSubmitting: false,
      setUser: (user) => set({ user }),
      login: async (userData: UserProps) => {
        set({ isSubmitting: true });
        try {
          const resp = await axiosInstance.post("/auth/login", userData);
          set({ user: resp.data });
          set({ isSubmitting: false });
          return resp.data;
        } catch (error) {
          console.error(error);
          set({ isSubmitting: false });
        }
        set({ isSubmitting: false });
      },
      logout: async () => {
        try {
          const resp = await axiosInstance.post("/auth/logout");
          set({ user: null });
          return resp.data;
        } catch (error) {
          console.error(error);
        }
      },
      refreshToken: async () => {
        try {
          const resp = await axiosInstance.post("/auth/refresh-token");
          if (resp.status === 200 || resp.data.user) {
            set({ user: resp.data.user });
            return true;
          }
          set({ user: null });
          return false;
        } catch (error) {
          console.error(error);
          set({ user: null });
          return false;
        }
      },
    }),
    {
      name: "user-storage",
      partialize: (state) => ({ user: state.user }),
    }
  )
);

class TokenRefresher {
  private static instance: TokenRefresher;
  private refreshPromise: Promise<boolean> | null = null;

  private constructor() {}

  static getInstance(): TokenRefresher {
    if (!TokenRefresher.instance) {
      TokenRefresher.instance = new TokenRefresher();
    }
    return TokenRefresher.instance;
  }

  async refreshToken(): Promise<boolean> {
    if (this.refreshPromise) {
      return this.refreshPromise;
    }

    this.refreshPromise = useUserStore.getState().refreshToken();

    try {
      const result = await this.refreshPromise;
      return result;
    } catch (error) {
      console.error("Token refresh error:", error);
      return false;
    } finally {
      this.refreshPromise = null;
    }
  }
}

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const tokenRefresher = TokenRefresher.getInstance();
      const refreshed = await tokenRefresher.refreshToken();

      if (refreshed) {
        return axiosInstance(originalRequest);
      }
      useUserStore.getState().logout();
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
