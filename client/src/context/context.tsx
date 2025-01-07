import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

interface ContextProps {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}

const initialState = {
  openModal: () => {},
  closeModal: () => {},
  isOpen: false,
};

const AppContext = createContext<ContextProps>(initialState);

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AppContext.Provider value={{ openModal, isOpen: isOpen, closeModal }}>
      {children}
    </AppContext.Provider>
  );
};
