import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-dark text-white min-vh-100">
      {/* Hero Section */}
      <div className="text-center py-5 px-3">
        <h1
          className="fw-bold display-4"
          style={{
            background: 'linear-gradient(to right, #60a5fa, #2dd4bf)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          ChatnShop
        </h1>
        <p className="mt-3 fs-5">
          The ultimate campus marketplace where students buy, sell, and chat.
        </p>

        <div className="mt-4 d-flex justify-content-center gap-3">
          <button
            onClick={() => navigate('/signup')}
            className="btn btn-primary px-4 py-2"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate('/login')}
            className="btn btn-secondary px-4 py-2"
          >
            Sign In
          </button>
        </div>

        {/* Don't have an account? Sign Up */}
        <p className="mt-3 text-light">
          Don’t have an account?{' '}
          <span
            className="text-info"
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </span>
        </p>
      </div>

      {/* Stats Section */}
      <div className="container text-center py-5">
        <div className="row g-4 justify-content-center">
          <div className="col-6 col-md-4">
            <h2 className="fw-bold text-info">1000+</h2>
            <p className="text-light">Active Students</p>
          </div>
          <div className="col-6 col-md-4">
            <h2 className="fw-bold text-success">500+</h2>
            <p className="text-light">Items Traded</p>
          </div>
          <div className="col-6 col-md-4">
            <h2 className="fw-bold text-warning">50+</h2>
            <p className="text-light">Campuses</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-secondary py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Why Choose ChatnShop?</h2>
          <div className="row g-4">
            {[
              { title: 'Lightning Fast', desc: 'Post and find items in seconds.' },
              { title: 'Safe & Secure', desc: 'Only verified students allowed.' },
              { title: 'Student Community', desc: 'Connect with peers from your campus.' },
              { title: 'Best Deals', desc: 'Get great prices on books, tech & more.' },
            ].map((item, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-3">
                <div className="bg-dark p-4 rounded shadow text-center h-100">
                  <div className="fs-5 fw-semibold mb-2">{item.title}</div>
                  <p className="text-light small">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
