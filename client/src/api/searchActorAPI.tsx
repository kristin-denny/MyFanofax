import Auth from '../auth/AuthService';

type ActorName = string;

export default async function searchActor(actorName: ActorName) {

  try {
    //note this api rt is not yet implemented
    const response = await fetch('/api/actor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`,
      },
      body: JSON.stringify(actorName),
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