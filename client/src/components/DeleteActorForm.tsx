import deleteActor from "../api/deleteActorAPI";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ActorContext } from '../context/ActorContext';

export default function DeleteActorForm(props: any) {
    const navigate = useNavigate();
  
    const { favoriteActors, setFavoriteActors } = useContext(ActorContext); // Access the context function

      function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Call backend API to add actor to favorites
        deleteActor(props.actorId)
          .then(() => {
            
            //update the actor context
            setFavoriteActors(favoriteActors.filter((actor: any) => actor.actorId !== props.actorId));


            //redirect to home page
            navigate(`/`);
          })
          .catch(() => {
            console.error('Issues deleting actor from favorite!:');
          });
    
      }

      return (
             
<form className="space-y-4" onSubmit={handleSubmit}>
            <button type='submit' className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Delete Actor From Favorites</button>
            </form>
    );
}