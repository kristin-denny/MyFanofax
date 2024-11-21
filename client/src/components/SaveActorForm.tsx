import saveActor from "../api/saveActorAPI";
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ActorContext } from '../context/ActorContext';

export default function SaveActorForm() {
  const [message, setMessage] = useState(''); // State to store the message
  
    const navigate = useNavigate();
    const { actor } = useContext(ActorContext); // Retrieve actor data from context
    const { favoriteActors, setFavoriteActors } = useContext(ActorContext); // Access the context function
    console.log("save form");
      function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Call backend API to add actor to favorites
        saveActor(actor, message)
          .then((data) => {
            const newData = {...data, movies: data.movies}; //changed this
            

            //update the actor context
            setFavoriteActors([...favoriteActors, newData]);


            //redirect to home page
            navigate(`/`);
          })
          .catch((error) => {
            console.error('Issues storing actor to favorite!:', error);
          });
    
      }

      return (
             
<form className="space-y-4" onSubmit={handleSubmit}>
  
<label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add comment to save with this Actor</label>
<textarea 
value={message}
onChange={(e) => setMessage(e.target.value)} 
rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

              <button type='submit' className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save To Favorites</button>
            </form>
    );
}