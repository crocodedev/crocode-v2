import { useGLTF } from '@react-three/drei';
import { createContext, useContext, useEffect, useState } from 'react';

import { MODELS } from '@/utils/const';

import { ModelsNameType } from '@/lib/three/types';

interface ModelsContextValue {
  isLoaded: boolean;
  loadedModels: ModelsNameType[];
}

const ModelsContext = createContext<ModelsContextValue>({
  isLoaded: false,
  loadedModels: [],
});

export const ModelsProvider = ({ children }: { children: React.ReactNode }) => {
  const [loadedModels, setLoadedModels] = useState<ModelsNameType[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadAllModels = async () => {
      const entries = Object.values(MODELS);
      await Promise.all(
        entries.map(async ({ url, name }) => {
          await useGLTF.preload(url);
          setLoadedModels(prev => [...prev, name as ModelsNameType]);
        }),
      );
      setIsLoaded(true);
    };

    loadAllModels();
  }, []);

  return (
    <ModelsContext.Provider value={{ isLoaded, loadedModels }}>
      {children}
    </ModelsContext.Provider>
  );
};

export const useModels = () => useContext(ModelsContext);
