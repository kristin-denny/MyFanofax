import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

export default function Login() { 
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
          <LoginForm />
        ) : (
          // Sign Up Form
          <SignupForm />
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
