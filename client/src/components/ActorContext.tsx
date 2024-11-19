// import { createContext, useState } from 'react';
// import Actor from '../interfaces/Actor';

// // Create a new context 
// export const ActorContext = createContext<Actor>({
//     name: '',
//     movies: [],
//     headshotURL: '',
// });

// // The ThemeProvider component manages the theme state for the application.
// import { ReactNode } from 'react';

// export const ActorProvider = ({ children }: { children: ReactNode }) => {
//   // Define a state variable
//   const [searchActor, setSearchActor] = useState<Actor>({name: '',
//     movies: [],
//     headshotURL: '',});
//   const [favActors, setFavActors] = useState({});

//   // Provide the current theme and toggle function to all child components.
//   return (
//     <ActorContext.Provider value={{ searchActor, favActors }}>
//       {children}
//     </ActorContext.Provider>
//   );
// };
