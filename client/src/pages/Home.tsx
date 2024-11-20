import SearchForm from "../components/SearchForm";
import { useEffect, useContext } from "react";
import { ActorContext } from "../context/ActorContext";
import getFavotieActors from "../api/retrieveFavariteActorsAPI";

export default function Home() {
  const { favoriteActors, setFavoriteActors } = useContext(ActorContext); // Access the context function
  useEffect(() => {
    const userId = parseInt(localStorage.getItem("userId") || "0"); // Retrieve user ID from local storage
    
    getFavotieActors(userId)
      .then((data) => {
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
          <div key={actor.actorId} className="m-4">
            <img src={actor.headshotURL} alt={actor.actorName} className="rounded-full h-32 w-32" />
            <p className="text-center">{actor.actorName}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
