import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddItemPage = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('image', image);

    try {
      const token = localStorage.getItem('token');

      const res = await axios.post('http://localhost:5000/api/items/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage('Item added successfully!');
      // Optionally redirect
      // navigate('/items');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to add item');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New Item</h2>

        <input
          type="text"
          placeholder="Item Name"
          className="w-full p-2 border rounded mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full p-2 border rounded mb-3"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Category"
          className="w-full p-2 border rounded mb-3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <input
          type="file"
          accept="image/*"
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
          Upload Item
        </button>

        {message && <p className="text-center mt-3 text-blue-700">{message}</p>}
      </form>
    </div>
  );
};

export default AddItemPage;
