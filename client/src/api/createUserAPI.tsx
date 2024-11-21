export default async function createUser(userInfo: any) {

  try {
    const response = await fetch('/auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('username already exists');
    }

    return data;

  } catch (err) {
    console.log('Error from user signup: ', err);
    return Promise.reject('Could not fetch user info');
  }

}
