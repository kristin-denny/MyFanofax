import SearchForm from "../components/SearchForm";
import { useEffect, useContext } from "react";
import { ActorContext } from "../context/ActorContext";
import getFavotieActors from "../api/retrieveFavariteActorsAPI";
import ActorDetailsForm from "../components/ActorDetailsForm";

export default function Home() {
  const { favoriteActors, setFavoriteActors } = useContext(ActorContext); // Access the context function
  useEffect(() => {
    const userId = parseInt(localStorage.getItem("userId") || "0"); // Retrieve user ID from local storage
    
    getFavotieActors(userId)
      .then((data) => {
        console.log('Favorite actors retrieved from API:', data); // Log API response
        // Add the favorite actors to the context
        setFavoriteActors(data);
      })
      .catch((err) => console.error('Error retrieving favorite actors', err)); // Handle errors
    
  }, []); // Dependency array includes favoriteActors
  

  return (
    <section className='my-6'>
      <h1 className="text-3xl font-bold mb-4 text-center md:text-left">MyFanofax Dashboard</h1>
      <SearchForm />

      <h2 className="mt-8 text-xl font-bold mb-4 text-center md:text-left">My Favorite Actors</h2>
      <div className="flex flex-wrap justify-center md:justify-start">
        
        {Array.isArray(favoriteActors) && favoriteActors.map((actor: any) => (
          <ActorDetailsForm key={actor.actorId} actor={actor} />
        )) || <p className="text-center">No favorite actors found</p>}
      </div>
    </section>
  );
}
