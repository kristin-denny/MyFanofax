import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActorContext } from '../context/ActorContext';
import { createSlug } from '../utils/actorNameSlug';

export default function ActorDetailsForm(props: any) {
    const navigate = useNavigate();
    const { setActor } = useContext(ActorContext); // Access the context function

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    //save actor to context
    setActor(props.actor);

    // Redirect to actor deatils page
    navigate(`favorite/actor/${createSlug(props.actor.actorName)}`);

    
  }

  return (
    <div>
      <form className="flex items-center md:items-start max-w-lg mx-auto md:mx-0" onSubmit={handleSubmit}>
        <button
          type="submit"
          className="m-4"
        >
          <img src={props.actor.headshotURL} alt={props.actor.actorName} className="rounded-full h-32 w-32" />
          <p className="text-center">{props.actor.actorName}</p>
        </button>
      </form>
    </div>
  );
}
