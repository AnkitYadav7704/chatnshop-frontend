import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/items/all');
        setItems(res.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">ChatnShop Marketplace</h1>
        <div className="space-x-4 flex flex-wrap">
          <Link
            to="/post-item"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Post Item
          </Link>

          <Link
            to="/my-listings"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            📦 My Listings
          </Link>

          <Link
            to="/chat"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            💬 Chat
          </Link>

          <Link
            to="/profile"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            👤 Profile
          </Link>
        </div>
      </header>

      {/* Search & Filter Bar */}
      <div className="mb-6 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search items..."
          className="flex-1 p-2 border rounded"
        />
        <select className="p-2 border rounded">
          <option>All Categories</option>
          <option>Books</option>
          <option>Electronics</option>
          <option>Clothing</option>
        </select>
        <select className="p-2 border rounded">
          <option>Sort by: Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      {/* Item Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item._id} className="bg-white rounded-xl shadow p-4">
              <img
                src={`http://localhost:5000/uploads/${item.imageUrl}`}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-blue-600 font-bold">₹{item.price}</p>
              <p className="text-sm text-gray-600">{item.category}</p>
            </div>
          ))
        ) : (
          <p>No items available yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
