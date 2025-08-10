import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold text-gradient bg-gradient-to-r from-blue-400 to-teal-400 inline-block bg-clip-text text-transparent">
          ChatnShop
        </h1>
        <p className="mt-4 text-xl">
          The ultimate campus marketplace where students buy, sell, and chat.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => navigate('/signup')}
            className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate('/login')}
            className="bg-gray-700 px-6 py-2 rounded-lg hover:bg-gray-600"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-center gap-12 py-12 text-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-400">1000+</h2>
          <p className="text-sm">Active Students</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-teal-400">500+</h2>
          <p className="text-sm">Items Traded</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-orange-400">50+</h2>
          <p className="text-sm">Campuses</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose ChatnShop?</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: 'Lightning Fast', desc: 'Post and find items in seconds.' },
            { title: 'Safe & Secure', desc: 'Only verified students allowed.' },
            { title: 'Student Community', desc: 'Connect with peers from your campus.' },
            { title: 'Best Deals', desc: 'Get great prices on books, tech & more.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-700 p-6 rounded-xl shadow text-center">
              <div className="text-2xl mb-2 font-semibold">{item.title}</div>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
