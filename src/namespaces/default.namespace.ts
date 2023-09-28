import { Server } from 'socket.io';
import { userAuthMiddleware } from '../middleware/socket_user_auth.middleware'; // Import the user authentication middleware
import { defaultSocket } from '../sockets';

export function startDefaultNamespace(io: Server) {
  let counter = 0;
  let userId = '';
  io.on('connection', async (socket) => {
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
    socket.on('chat', (arg) => {
      defaultSocket.chat(socket, userId, arg);
    });

    socket.on('default', (message) => {
      defaultSocket.default(socket, userId);
    });
  });
}
