import Auth from '../auth/AuthService';

export default async function saveActor(actor: any) {

    //create a new actor obj for backend
    const actorObj = {
      actorName: actor.actorName,
      movies: JSON.stringify(actor.movies), // do i need this?
      comments: "", // No comments for now - need to add comments feature
      headshotURL: actor.headshotURL,
      userID: 1 // Hardcoded for now - need actual user ID
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

    
     //should receive all favorite actors for this user
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Information not retrieved, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('Error storing actor to users favorites:', err);
    return Promise.reject('Error storing actor to users favorites');
  }
  
  }