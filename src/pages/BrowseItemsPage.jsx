import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BrowseItemsPage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/items/all');

        setItems(res.data);
      } catch (err) {
        setError('Failed to fetch items');
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Marketplace Items</h1>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item._id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={`http://localhost:5000/uploads/${item.imageUrl}`}
              alt={item.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">₹{item.price}</p>
            <p className="text-sm text-blue-600">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseItemsPage;
