import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyListingsPage = () => {
  const [myItems, setMyItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMyItems = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          setError('You must be logged in to view your listings.');
          setLoading(false);
          return;
        }

        const res = await axios.get('http://localhost:5000/api/items/my', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setMyItems(res.data);
      } catch (err) {
        console.error('❌ Error fetching my items:', err.response || err.message || err);
        setError(
          err.response?.data?.message || 'Failed to load your listings. Please try again.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMyItems();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">📦 My Listings</h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading your items...</p>
      ) : error ? (
        <p className="text-red-600 text-center">{error}</p>
      ) : myItems.length === 0 ? (
        <p className="text-center text-gray-500">You haven’t posted any items yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myItems.map((item) => (
            <div key={item._id} className="bg-white rounded-xl shadow-md p-4">
              <img
                src={`http://localhost:5000/uploads/${item.imageUrl}`}
                alt={item.name}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600 font-medium">₹{item.price}</p>
              <p className="text-sm text-blue-500">{item.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyListingsPage;
