import React, { useState } from 'react';
import createUser from '../api/createUserAPI';
import Auth from '../auth/AuthService';

export default function SignupForm() {

    const [values, setValues] = useState({
        username: '',
        password: '',
        confirmPassword: ''
      });
    
      const [error, setError] = useState("");
    
      function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
    
        // Check if fields are filled
        if (!values.username || !values.password || !values.confirmPassword) {
          setError("All fields are required.");
          return;
        }
    
        // Check message length
        if (values.password !== values.confirmPassword) {
          setError("Confirm password must match!");
          return;
        }
    
        // If validation passes, clear error message
        setError("");
        
        // Call backend API to submit form data
        createUser({ username: values.username, password: values.password })
    
          .then((data) => {
            console.log('User created:', data);
            //data.token should have the JWT token
            Auth.login(data.token);
          })
          .catch((error) => {
            console.error('Error creating user:', error);
            setError("Username already exists.");
          });
    
    
        // Clear form fields after submission
        setValues({
          username: '',
          password: '',
          confirmPassword: ''
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
                placeholder="Choose a username"
                required
              />
            </div>
            <div> {/* Password Input */}
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleOnChange}
                className="w-full text-black px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Create a password"
                required
              />
            </div>
            <div> {/* Confirm Password Input */}
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleOnChange}
                className="w-full text-black px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
                required
              />
            </div>
            <button // Sign Up Button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up 
            </button>
            {error && <p className="text-sm font-thin text-red-500 text-center mb-4">{error}</p>}
          </form>
    );
}