import { ReactNode, createContext, useContext, useState } from 'react';

import { COOKIE, cookieStore } from '@/utils/cookies';

type TPopupContext = {
  isOpenPopup: boolean;
  openPopup: () => void;
  closePopup: () => void;
  togglePopup: () => void;
  isOpenCookies: boolean;
  closeCookies: () => void;
};

const MainContext = createContext<TPopupContext | undefined>(undefined);

export const MainProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isOpenCookies, setIsOpenCookies] = useState(true);

  const openPopup = () => setIsOpenPopup(true);
  const closePopup = () => setIsOpenPopup(false);
  const togglePopup = () => setIsOpenPopup((prev) => !prev);

  const closeCookies = () => {
    setIsOpenCookies(false);
    cookieStore.set(COOKIE.ACCESS, 'confirmed');
  };
  return (
    <MainContext
      value={{
        isOpenPopup,
        openPopup,
        closePopup,
        togglePopup,
        isOpenCookies,
        closeCookies,
      }}
    >
      {children}
    </MainContext>
  );
};

export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error('useMainContext must be used within a PopupProvider');
  }
  return context;
};
