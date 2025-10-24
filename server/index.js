// server/index.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 10000;
const CLIENT_ORIGIN_URL = process.env.CLIENT_ORIGIN_URL || 'http://localhost:3000';

app.use(cors({
  origin: CLIENT_ORIGIN_URL,
  methods: ['GET', 'POST']
}));

// 1. Create HTTP server instance from the Express app
const server = http.createServer(app);

// 2. Initialize Socket.IO with CORS configured for your frontend
const io = new Server(server, {
  cors: {
    origin: CLIENT_ORIGIN_URL,
    methods: ['GET', 'POST']
  }
});

// A simple in-memory storage for messages (NOT a real database replacement)
const chatMessages = []; 

// 3. Socket.IO Connection Logic
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Send the current message history to the newly connected user
  socket.emit('initial_messages', chatMessages);

  // Listener for incoming messages from the client
  socket.on('send_message', (data) => {
    console.log('Message received:', data);
    
    // Store the message (in-memory, will clear on server restart)
    chatMessages.push(data);
    
    // Broadcast the new message to ALL connected clients
    io.emit('receive_message', data);
  });

  // Handle user disconnect
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});


// Simple root route for Render health check
app.get('/', (req, res) => {
  res.send('GenZChat Server is Running with Socket.IO!');
});

server.listen(PORT, () => {
  console.log(`🚀 GenZChat Server listening on port ${PORT}`);
});
