import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setStatus('');
    setError('');

    try {
      const res = await axios.post('http://localhost:5000/api/auth/send-otp', { email });
      setStatus('OTP sent successfully!');

      // Navigate to OTP verification page after 1 second
      setTimeout(() => {
        navigate('/verify-otp');
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send OTP');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSendOTP}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>

        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Send OTP
        </button>

        {status && <p className="text-green-600 mt-2 text-center">{status}</p>}
        {error && <p className="text-red-600 mt-2 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default SignupPage;
