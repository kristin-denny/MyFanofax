import React, { useState } from 'react';
import searchActor from '../api/searchActorAPI';

export default function SearchForm() {
    
    const [name, setName] = useState("");
      const [error, setError] = useState("");
    
      function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
    
        // Check if fields are filled
        if (!name) {
          setError("All fields are required");
          return;
        }
    
        // If validation passes, clear error message
        setError("");


        // Call backend to search api for actor
        searchActor(name)
    
          .then((data) => {
            console.log('Actor data:', data);
            //if data received redirect to actor page
            //note can send data to actor page or store in context and then access in actor page
          })
          .catch((error) => {
            console.error('Error retreiving actor data:', error);
            setError("We couldn\'t find that actor, please try a different actor name.");
          });
    
    
        // Clear form fields after submission
        setName("");
    
      }

      function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
    
        setName(value);
      }

    return (
        <div>
<form className="flex items-center md:items-start max-w-lg mx-auto md:mx-0" onSubmit={handleSubmit}> 
    <div className="w-full">
        <input type="text" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Actor Name" 
        onChange={handleOnChange}
        required />
    </div>
    <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>Search
    </button>
</form>
{error && <p className="text-sm font-thin text-red-500 text-center mb-4">{error}</p>}
</div>
    );
}