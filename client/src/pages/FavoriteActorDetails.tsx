//this page will display the favarite actor details and also provide the option to remove the actor from the favorite list
import { useContext } from 'react';
import { ActorContext } from '../context/ActorContext';
import ActorCard from '../components/ActorCard';
import MovieCard from '../components/MovieCard';

export default function FavoriteActorDetails() {

    // Retrieve the actor data from the context
    const { actor } = useContext(ActorContext); // Access the context function
    console.log('Favorite actor from detailspage:', actor); // Log the actor data

    return (
      <section className='my-6 w-full grid grid-cols-1 justify-items-center'>
        <h1 className="text-3xl font-bold mb-4 text-center md:text-left">Favorite Actor Details</h1>

        <ActorCard actor={actor} deleteFlag={true} />
        {(JSON.parse(actor.movies)).map((movie: any, index: any) => (
        <MovieCard
          key={index} // Use a unique key for each item, such as movie ID if available
          movieName={movie.movieName}
          posterURL={movie.posterURL}
          releaseDate={movie.releaseDate}
          summary={movie.summary}
        />
      ))}
      </section>
    );
  }
  