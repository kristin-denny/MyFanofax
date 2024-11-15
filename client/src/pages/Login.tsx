import { useState } from 'react';
import createUser from '../api/userAPI';
import Auth from '../auth/AuthService';

export default function Portfolio() { // Rename to Login
  const [isLogin, setIsLogin] = useState(true);
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

    console.log('Form submitted:', values);
    
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

  return ( // Login Form UI with conditional rendering
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          {isLogin ? 'Login' : 'Sign Up'}
        </h1>
        <h2 className="text-center text-gray-600 mb-6">
          {isLogin ? 'Login with your username and password' : 'Sign up to create an account'}
        </h2>

        {isLogin ? (
          // Login Form 
          <form className="space-y-4">
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
          </form>
        ) : (
          // Sign Up Form
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
          </form>
        )}

{error && <p className="text-sm font-thin text-red-500 text-center mb-4">{error}</p>}

        {/* Toggle Login/Signup */}
        <p className="text-center text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-blue-600 hover:underline focus:outline-none"
            >
            {/* {Toggle Button Text}  */}
            {isLogin ? 'Sign Up' : 'Login'} 
          </button>
        </p>
      </div>
    </section>
  );
}
