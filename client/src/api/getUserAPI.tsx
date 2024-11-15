import  UserInfoType  from "../interfaces/UserInfoType";

export default async function createUser(userInfo: UserInfoType) {

    try {
      const response = await fetch('/api/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error('user not found');
      }
  
      return data;
  
    } catch (err) {
      console.log('Error from user login: ', err);
      return Promise.reject('Could not fetch user info');
    }
  
  }