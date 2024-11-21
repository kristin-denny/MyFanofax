import React, { createContext, useState, ReactNode } from 'react';

// Define the type for the context
interface ActorContextType {
  actor: any; 
  setActor: React.Dispatch<React.SetStateAction<any>>;
  favoriteActors: any; 
  setFavoriteActors: React.Dispatch<React.SetStateAction<any>>;
}

// Create the context with a default value
export const ActorContext = createContext<ActorContextType>({
  actor: {}, 
  setActor: () => {},
  favoriteActors: [], 
  setFavoriteActors: () => {},
});

// The provider component
export const ActorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [actor, setActor] = useState({});
  const [favoriteActors, setFavoriteActors] = useState<any[]>([]);

  return (
    <ActorContext.Provider value={{ actor, setActor, favoriteActors, setFavoriteActors }}>
      {children}
    </ActorContext.Provider>
  );
};
