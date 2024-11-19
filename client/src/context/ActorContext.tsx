import React, { createContext, useState, ReactNode } from 'react';

// Define the type for the context
interface ActorContextType {
  actor: any; 
  setActor: React.Dispatch<React.SetStateAction<any>>;
  favActors: any; 
  setFavActors: React.Dispatch<React.SetStateAction<any>>;
}

// Create the context with a default value
export const ActorContext = createContext<ActorContextType>({
  actor: {},
  setActor: () => {},
  favActors: {},
  setFavActors: () => {},
});

// The provider component
export const ActorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [actor, setActor] = useState({});
  const [favActors, setFavActors] = useState({});

  return (
    <ActorContext.Provider value={{ actor, setActor, favActors, setFavActors }}>
      {children}
    </ActorContext.Provider>
  );
};
