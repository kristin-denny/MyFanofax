//this file is used to retrieve the favorite actors from the database
import Auth from '../auth/AuthService';

export default async function getFavotieActors(userId: number) {

  try {
    const response = await fetch('/api/actors/all', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`,
      },
      body: JSON.stringify(userId),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Information not retrieved, check network tab!');
    }

    return data;
  } catch (err) {
    console.error('Error getting user favorite actors:', err);
    return Promise.reject('Error getting user favorite actors');
  }
  
  }