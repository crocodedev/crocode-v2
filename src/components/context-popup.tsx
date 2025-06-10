import { ReactNode, createContext, useContext, useState } from 'react';

type TPopupContext = {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
  togglePopup: () => void;
};

const PopupContext = createContext<TPopupContext | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);
  const togglePopup = () => setIsOpen((prev) => !prev);

  return (
    <PopupContext value={{ isOpen, openPopup, closePopup, togglePopup }}>
      {children}
    </PopupContext>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};
