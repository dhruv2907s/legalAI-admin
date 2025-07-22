import React, { useState } from 'react';

const LoginModal = ({ onClose }: { onClose: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const endpoint = isNewUser 
      ? 'http://localhost:5000/api/auth/register' 
      : 'http://localhost:5000/api/auth/login';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setMessage(data.message);
      if (!isNewUser) onClose(); // Close modal on successful login
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[400px] relative">
        <h2 className="text-2xl font-bold mb-4">{isNewUser ? 'Register' : 'Login'}</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border text-black"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border text-black"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button
          className="bg-primary text-white w-full py-2 mb-3"
          onClick={handleSubmit}
        >
          {isNewUser ? 'Create Account' : 'Login'}
        </button>
        <p
          className="text-sm text-gray-600 cursor-pointer"
          onClick={() => setIsNewUser(!isNewUser)}
        >
          {isNewUser ? 'Already have an account? Login' : "Don't have an account? Create one"}
        </p>
        {message && <p className="mt-2 text-sm text-red-500">{message}</p>}
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
