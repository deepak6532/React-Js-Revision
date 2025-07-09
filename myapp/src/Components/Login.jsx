import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = { email, password };
    const data = JSON.parse(localStorage.getItem('data'));

    if (!data) {
      alert('No user found. Please register first.');
      return;
    }

    if (
      form.email.toLowerCase() === data.email.toLowerCase() &&
      form.password === data.password
    ) {
      alert('Login successful!');
      navigate('/useeffect'); // Redirect to /useeffect
    } else {
      alert('Email or password does not match');
    }
  };

  return (
    <div className="bg-gray-300 min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-100 border-2 border-black w-100 p-4 rounded">
        <h1 className="text-2xl text-center font-bold">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black rounded-lg"
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold transition duration-300 rounded-lg p-2 hover:bg-blue-600 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
