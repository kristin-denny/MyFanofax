import SearchForm from "../components/SearchForm";
import { useEffect, useContext } from "react";
import { ActorContext } from "../context/ActorContext";
import getFavotieActors from "../api/retrieveFavariteActorsAPI";

export default function Home() {
  const { favoriteActors } = useContext(ActorContext); // Retrieve actor data from context

  useEffect(() => {
    const userId = parseInt(localStorage.getItem("userId") || "0"); // Retrieve user ID from local storage'');
    getFavotieActors(userId).then((data) => {
      console.log(data);
    }); // Retrieve favorite actors from the database

  }, [favoriteActors]);

  return (
    <section className='my-6'>
      <h1 className="text-3xl font-bold mb-4 text-center md:text-left">MyFanofax Dashboard</h1>
      <SearchForm />
    </section>
  );
}
