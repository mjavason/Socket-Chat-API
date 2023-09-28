import { Server, Socket } from 'socket.io';
import { userAuthMiddleware } from '../middleware/socket_user_auth.middleware';
import { chatSocket } from '../sockets';

export function startChatNamespace(io: Server) {
  const chatNamespace = io.of('/chat'); // Create a new namespace '/chat'
  let counter = 0;
  let userId = '';

  chatNamespace.on('connection', async (socket) => {
    const { token } = socket.handshake.auth;
    const user = await userAuthMiddleware(token);

    if (!user) {
      console.log('Invalid token');
      // Handle authentication error, e.g., disconnect the socket
      socket.disconnect();
      return;
    }

    // Now you can use the token for authentication or user identification
    console.log(`User connected with token: ${token}`);

    // If authentication is successful, you can access the user ID on the socket
    if (typeof user === 'string') {
      console.log('Invalid token');
      socket.disconnect();
      return;
    }

    userId = user._id;

    counter++;
    console.log(`User ${userId} connected`, counter);
    socket.emit('hello', 'hello from the backend');

    chatSocket.joinChat(socket, userId)
  });
}
