const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const header = document.getElementById('title');

const serverUrl = 'http://localhost:5000';

import { io } from 'https://cdn.socket.io/4.4.1/socket.io.esm.min.js';
const socket = io(`${serverUrl}`, {
  auth: {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTE1YzQ1ZjlkMjFhZWNiOGQxODQzODciLCJyb2xlIjoidXNlciIsImlhdCI6MTY5NTkyNTY3NywiZXhwIjoxNjk2MDk4NDc3fQ.tNBsIZ1zpTuBZhPgkSM3uCU2LmxenqCJpsUgmB2fDCA', // Pass your authentication token here
  },
});

socket.on('hello', (arg1, arg2, arg3, arg4) => {
  console.log(arg1); // 1
});

sendButton.addEventListener('click', () => {
  console.log('button clicked');

  // Get the message from the input field
  const message = messageInput.value;

  // Emit the chat message to the server
  socket.emit('chat', message);
  socket.emit('default', message);
  console.log(message);

  // Clear the input field after sending the message
  // messageInput.value = '';
});

socket.on('reply', (arg1) => {
  console.log(arg1);

  chatMessages.value += arg1 + '\n';
});

socket.on('default', (arg1) => {
  console.log(arg1);

  header.innerHTML = arg1;
});

socket.on('new_namespace', (arg1) => {
  console.log(arg1);
});

// Function to add a new namespace to the list
function addNamespaceToList(namespaceName) {
  const namespaceItem = document.createElement('li');
  namespaceItem.textContent = `New Namespace: ${namespaceName}`;
  namespaceList.appendChild(namespaceItem);
}
