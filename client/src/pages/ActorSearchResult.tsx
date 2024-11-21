import { useContext } from 'react';
import { ActorContext } from '../context/ActorContext';
import ActorCard from '../components/ActorCard';
import MovieCard from '../components/MovieCard';

export default function ActorSearchResult() {
  const { actor } = useContext(ActorContext); // Retrieve actor data from context

  return (
    <section className="my-6 w-full grid grid-cols-1 justify-items-center">
      <h1 className="text-3xl font-bold mb-4 text-center md:text-left">Actor Search Result</h1>
      <ActorCard actor={actor} />
      <h2 className="text-xl font-bold mt-8 mb-4 text-center md:text-left">Actor Popular Movies</h2>
      {actor.movies.map((movie: any, index: any) => (
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
