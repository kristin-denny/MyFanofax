import Auth from '../auth/AuthService';

export default async function saveActor(actor: any) {

    //create a new actor obj for backend
    const actorObj = {
      actorName: actor.actorName,
      movies: JSON.stringify(actor.movies), // If stored as string,
      comments: "",
      headshotURL: actor.headshotURL,
      userID: 1
    };

  try {
    const response = await fetch('/api/actors/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`,
      },
      body: JSON.stringify(actorObj),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Actor information not retrieved, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error from actor api: ', err);
    return Promise.reject('Could not fetch actor info');
  }
  
  }