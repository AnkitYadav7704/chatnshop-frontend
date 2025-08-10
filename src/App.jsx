// import { useState } from 'react'



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <h1>ankit</h1>
//     </>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import OTPVerifyPage from './pages/OTPVerifyPage';
import LoginPage from './pages/LoginPage';
import AddItemPage from './pages/AddItemPage';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import PostItem from './pages/PostItem';
import BrowseItemsPage from './pages/BrowseItemsPage';
import ChatPage from './pages/ChatPage';
import MyListingsPage from './pages/MyListingsPage';
import ProfilePage from './pages/ProfilePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-otp" element={<OTPVerifyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add-item" element={<AddItemPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post-item" element={<PostItem />} />
        <Route path="/items" element={<BrowseItemsPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/my-items" element={<MyListingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />

      </Routes>
    </Router>
  );
}

export default App;
