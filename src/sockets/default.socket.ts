import Model from '../database/models/user.model';
import Interface from '../interfaces/user.interface';
import { Socket, Server } from 'socket.io';

function computeUserId(socket: Socket) {
  const ipAddress = socket.handshake.address; // Get the IP address of the socket
  const timestamp = Date.now(); // Get the current timestamp
  const userId = `${ipAddress}_${timestamp}`;
  return userId;
}

class DefaultSocket {
  default(socket: Socket, userId: string) {
    let counter = 0;

    counter++;
    console.log('User connected', counter);

    socket.emit('default', 'Welcome to the #100DaysOfAPIAwesomeness Socket server'); // Inform the user
  }

  chat(socket: Socket, userId: string, chatNamespace: Server) {
    socket.on('chat', (message: string, user: string) => {
      userId = user;
      socket.join(userId); // Join a room with the user's unique ID
      socket.to(userId).emit('reply', `I received your message, you said: "${message}"`); // Inform the user
    });
  }
}

export const defaultSocket = new DefaultSocket();
