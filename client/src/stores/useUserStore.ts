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
    }),
    {
      name: "user-storage",
      partialize: (state) => ({ user: state.user }),
    }
  )
);
