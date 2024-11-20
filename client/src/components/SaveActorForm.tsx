import saveActor from "../api/saveActorAPI";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ActorContext } from '../context/ActorContext';

export default function SaveActorForm() {
    const navigate = useNavigate();
    const { actor } = useContext(ActorContext); // Retrieve actor data from context
    const { setFavoriteActor } = useContext(ActorContext); // Access the context function

      function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Call backend API to add actor to favorites
        saveActor(actor)
          .then((data) => {
            //should receive all favorite actors for this user
            console.log('Actor backend:', data);

            //update the actor context
            setFavoriteActor(data);


            //redirect to home page
            navigate(`/`);
          })
          .catch((error) => {
            console.error('Actor already in your favorites!:', error);
          });
    
      }

      return (
             
<form className="space-y-4" onSubmit={handleSubmit}>
            <button type='submit' className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save To Favorites</button>
            </form>
    );
}