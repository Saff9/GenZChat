// client/src/Chat.jsx
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// Define the API URL from your Render service (to be set in Vercel env vars)
const SOCKET_SERVER_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:10000';

// Connect to the Socket.IO server
const socket = io(SOCKET_SERVER_URL);

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('User' + Math.floor(Math.random() * 1000)); 

  useEffect(() => {
    // 1. Listen for initial message history (on connect)
    socket.on('initial_messages', (initialMsgs) => {
      setMessages(initialMsgs);
    });

    // 2. Listen for new incoming messages
    socket.on('receive_message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      // Clean up listeners on component unmount
      socket.off('initial_messages');
      socket.off('receive_message');
    };
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const messageData = {
        id: Date.now(),
        sender: username,
        text: input.trim(),
        timestamp: new Date().toLocaleTimeString(),
      };
      
      // Emit message to the server
      socket.emit('send_message', messageData);
      
      setInput('');
    }
  };

  return (
    <div className="chat-app-container">
      <div className="header">GenZChat - Logged in as: {username}</div>
      
      <div className="messages-area">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`message ${msg.sender === username ? 'sent' : 'received'}`}
          >
            <span className="sender-name">{msg.sender}</span>
            <span className="message-text">{msg.text}</span>
            <span className="message-time">{msg.timestamp}</span>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSendMessage} className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
