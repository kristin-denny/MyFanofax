//this page will display the favarite actor details and also provide the option to remove the actor from the favorite list
import { useContext } from 'react';
import { ActorContext } from '../context/ActorContext';
import ActorCard from '../components/ActorCard';

export default function FavoriteActorDetails() {

    // Retrieve the actor data from the context
    const { actor } = useContext(ActorContext); // Access the context function

    return (
      <section className='my-6 w-full grid grid-cols-1 justify-items-center'>
        <h1 className="text-3xl font-bold mb-4 text-center md:text-left">Favorite Actor Details</h1>

        <ActorCard actorName={actor.actorName} actorImage={actor.headshotURL} deleteFlag={true} actorId={actor.actorId} />
      </section>
    );
  }
  