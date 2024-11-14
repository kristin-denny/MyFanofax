import { useState } from 'react';

export default function Portfolio() { // Rename to Login
  const [isLogin, setIsLogin] = useState(true);

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
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Choose a username"
                required
              />
            </div>
            <div>   {/* Email Input */}
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div> {/* Password Input */}
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Create a password"
                required
              />
            </div>
            <div> {/* Confirm Password Input */}
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
