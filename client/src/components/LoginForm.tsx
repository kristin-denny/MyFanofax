import React, { useState } from 'react';
import loginUser from '../api/loginUserAPI';
import Auth from '../auth/AuthService';

export default function LoginForm() {

    const [values, setValues] = useState({
        username: '',
        password: '',
      });
    
      const [error, setError] = useState("");
    
      function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
    
        // Check if fields are filled
        if (!values.username || !values.password ) {
          setError("All fields are required.");
          return;
        }
    
        // If validation passes, clear error message
        setError("");


        // Call backend API to submit form data
        loginUser({ username: values.username, password: values.password })
    
          .then((data) => {
            console.log('User login:', data);
            //save user to local storage
            localStorage.setItem('userId', data.user.userId.toString());
            //data.token should have the JWT token
            Auth.login(data.token);
          })
          .catch((error) => {
            console.error('Error retreiving user:', error);
            setError("Username doesn't exists.");
            //redirect to signup page (automatically!)
          });
    
    
        // Clear form fields after submission
        setValues({
          username: '',
          password: ''
        });
    
      }
    
      function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        const key = e.target.name;
        const value = e.target.value;
    
        setValues(values => ({
          ...values,
          [key]: value,
        }));
      }

      return (
             
<form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={values.username}
                onChange={handleOnChange}
                className="w-full text-black px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleOnChange}
                className="w-full text-black px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>

            {error && <p className="text-sm font-thin text-red-500 text-center mb-4">{error}</p>}
          </form>
    );
}