import React, { useState, useEffect } from 'react';

const ChatPage = () => {
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  // Example fetch chats (mock or replace with API)
  useEffect(() => {
    // Fetch user conversations from backend (e.g., /api/messages/my)
    // Example placeholder:
    setConversations([
      { id: '1', name: 'John Doe' },
      { id: '2', name: 'Alice Smith' },
    ]);
  }, []);

  const handleChatSelect = (chatId) => {
    setSelectedChatId(chatId);
    // Fetch chat messages by ID (e.g., /api/messages/:chatId)
    // Example placeholder:
    setMessages([
      { id: 'm1', from: 'you', text: 'Hi!' },
      { id: 'm2', from: 'them', text: 'Hello!' },
    ]);
  };

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const message = { id: Date.now(), from: 'you', text: newMessage };
    setMessages((prev) => [...prev, message]);
    setNewMessage('');

    // TODO: Send message to backend via POST /api/messages/send
  };

  return (
    <div className="flex h-screen">
      {/* Left chat list */}
      <div className="w-1/4 border-r overflow-y-auto p-4 bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Chats</h2>
        {conversations.map((chat) => (
          <div
            key={chat.id}
            onClick={() => handleChatSelect(chat.id)}
            className={`p-2 cursor-pointer rounded ${
              selectedChatId === chat.id ? 'bg-blue-100' : 'hover:bg-gray-200'
            }`}
          >
            {chat.name}
          </div>
        ))}
      </div>

      {/* Right messages */}
      <div className="flex flex-col flex-1 p-4">
        <div className="flex-1 overflow-y-auto mb-4 border rounded p-4 bg-white shadow">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-2 ${
                msg.from === 'you' ? 'text-right' : 'text-left'
              }`}
            >
              <span
                className={`inline-block px-3 py-2 rounded ${
                  msg.from === 'you'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200'
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border rounded p-2"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
