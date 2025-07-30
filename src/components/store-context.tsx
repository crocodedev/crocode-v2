/* eslint-disable @typescript-eslint/no-explicit-any */
import { TCase } from './sections/cases/type';
import { ReactNode, createContext, useContext, useState } from 'react';

type CasesData = {
  casesAll: TCase[];
  technologies: string[];
  countries: string[];
};

type TPopupContext = {
  casesData: CasesData;
  setCasesData: (data: CasesData) => void;
  blogs: any;
  setBlogs: (blogs: any) => void;
};

const StoreContext = createContext<TPopupContext | undefined>(undefined);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [casesData, setCasesData] = useState<CasesData>({
    casesAll: [],
    technologies: [],
    countries: [],
  });
  const [blogs, setBlogs] = useState([]);

  return (
    <StoreContext
      value={{
        casesData,
        setCasesData,
        blogs,
        setBlogs,
      }}
    >
      {children}
    </StoreContext>
  );
};

export const useStoreContext = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStoreContext must be used within a StoreProvider');
  }
  return context;
};
