import Auth from '../auth/AuthService';

export default async function deleteActor(actorId: number) {

  try {
    const response = await fetch('/api/actors/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`,
      },
      body: JSON.stringify({ actorId }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Information not retrieved, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('Error deleting actor from favorites:', err);
    return Promise.reject('Error deleting actor from favorites');
  }
  
  }