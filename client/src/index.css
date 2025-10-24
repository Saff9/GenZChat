/* client/src/index.css (Add to your existing file) */

:root {
  --primary-color: #075E54; /* WhatsApp/Telegram-like green */
  --secondary-color: #25D366; 
  --bg-color: #ECE5DD;
  --sent-bubble: #D9FDD3;
  --received-bubble: #FFFFFF;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  background-color: var(--bg-color);
}

.chat-app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 600px; /* Constrain width for desktop chat feel */
  margin: 0 auto;
  background-color: #f7f7f7;
}

.header {
  background-color: var(--primary-color);
  color: white;
  padding: 15px;
  font-size: 1.2em;
  text-align: center;
}

.messages-area {
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.message {
  padding: 8px 12px;
  border-radius: 18px;
  margin-bottom: 8px;
  max-width: 80%;
  display: flex;
  flex-direction: column;
}

.message.sent {
  align-self: flex-end;
  background-color: var(--sent-bubble);
  margin-left: auto;
}

.message.received {
  align-self: flex-start;
  background-color: var(--received-bubble);
  margin-right: auto;
}

.sender-name {
  font-size: 0.75em;
  font-weight: bold;
  color: #888;
  margin-bottom: 2px;
}

.message-time {
  font-size: 0.65em;
  color: #999;
  align-self: flex-end;
  margin-top: 5px;
}

.input-area {
  display: flex;
  padding: 10px;
  background-color: white;
  border-top: 1px solid #ddd;
}

.input-area input {
  flex-grow: 1;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  margin-right: 10px;
}

.input-area button {
  background-color: var(--secondary-color);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
}

/* --- Mobile Responsiveness --- */
@media (max-width: 600px) {
    .chat-app-container {
        max-width: 100%;
    }
}
