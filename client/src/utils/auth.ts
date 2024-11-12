//TODO: Import the necessary type and method from 'jwt-decode'
import { jwtDecode, JwtPayload } from 'jwt-decode';


class AuthService {
  getProfile() {
    //TODO: Complete this function
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
    
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string) {
    //TODO: Complete this function
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      // Check if the token has an expiration time and if it’s expired
      return decoded.exp ? decoded.exp * 1000 < Date.now() : false;
    } catch (error) {
      // If there’s an error decoding, treat the token as expired
      return true;
    }

  }

  getToken(): string {
    const loggedUser = localStorage.getItem('id_token') || '';
    return loggedUser;
  }

  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();

/*
imports

To complete your AuthService class using the jwt-decode package, you’ll need to import jwt_decode and JwtPayload from the jwt-decode library to decode the JWT and access user information
*/

/*
getProfie Method:

It first retrieves the token from localStorage using getToken.
If a token exists, it decodes it using jwt_decode and returns the decoded data. If there’s no token, it returns null.
*/


/*
isTokenExpired Method:

The isTokenExpired method checks if the token is still valid by comparing the exp (expiration) timestamp in the token with the current time. In JWT, the exp is in seconds, so we’ll need to multiply by 1000 to convert it to milliseconds to compare with JavaScript's Date.now(). If the token is expired, the method should return true; otherwise, it should return false.
*/
