const joinRoomButton = document.getElementById('joinRoom');
const sendMessageButton = document.getElementById('sendMessage');

import { io } from 'https://cdn.socket.io/4.4.1/socket.io.esm.min.js';

const serverUrl = 'http://localhost:5000';
const socket = io(`${serverUrl}`, {
  auth: {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTE4MWViZTg3NmEwOWExOGI1ODc2ZjgiLCJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6Im9yamltaWNoYWVsMjI0MEBnbWFpbC5jb20iLCJpYXQiOjE2OTYwODAzMzEsImV4cCI6MTY5NjI1MzEzMX0.RrfaScmVWn1V1Akgx-IhlHcAG0lN1OGAsN9jUJGMUSU', // Pass your authentication token here
  },
});

joinRoomButton.addEventListener('click', () => {
  const room = document.getElementById('room').value;
  socket.emit('join', room);
  document.getElementById('room-form').style.display = 'none';
  document.getElementById('chat').style.display = 'block';
});

sendMessageButton.addEventListener('click', () => {
  const room = document.getElementById('room').value;
  const message = document.getElementById('message').value;
  socket.emit('chat message', room, message);
  document.getElementById('message').value = '';
});

socket.on('chat message', (message) => {
  const ul = document.getElementById('messages');
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(message));
  ul.appendChild(li);
});
