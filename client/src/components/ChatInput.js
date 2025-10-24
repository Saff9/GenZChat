// Server-side code (Node.js/Express)
const express = require('express');
const cors = require('cors');
const app = express();

const allowedOrigins = [
  'http://localhost:3000', // For local testing
  'https://gen-z-chat-seven.vercel.app' // Your Vercel frontend URL
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

// Or, for a simpler, less secure fix to test, you can use:
// app.use(cors()); 
// This allows ALL origins, which is often used temporarily to confirm CORS is the issue.

// ... rest of your server code
