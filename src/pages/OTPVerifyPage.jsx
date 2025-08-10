import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OTPVerifyPage = () => {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('http://localhost:5000/api/auth/verify-otp', {
        email,
        otp,
        password,
      });

      const token = res.data.token;
      localStorage.setItem('token', token); // Save token

      navigate('/dashboard'); // ✅ Redirect to dashboard
    } catch (err) {
      setError(err.response?.data?.message || '❌ Failed to verify OTP');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleVerifyOTP}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">🔐 Verify OTP & Set Password</h2>

        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          maxLength={6}
          required
        />

        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Set a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Verify & Register
        </button>

        {error && <p className="text-red-600 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default OTPVerifyPage;
