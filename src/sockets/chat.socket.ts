import Model from '../database/models/user.model';
import Interface from '../interfaces/user.interface';
import { Socket, Server } from 'socket.io';

class ChatSocket {
  joinChat(socket: Socket, userId: string, chatNamespace: Server) {
    socket.on('join', (user: string) => {
      userId = user;
      socket.join(userId); // Join a room with the user's unique ID
      chatNamespace.to(userId).emit('chat_message', 'You joined the chat'); // Inform the user
    });
  }

  sendMessage(socket: Socket, userId: string, chatNamespace: Server) {
    socket.on('chat_message', (message: string) => {
      if (userId) {
        // Broadcast the message to the user's room
        chatNamespace.to(userId).emit('chat_message', message);
      }
    });
  }

  leaveChat(socket: Socket, userId: string, chatNamespace: Server) {
    socket.on('disconnect', () => {
      if (userId) {
        chatNamespace.to(userId).emit('chat_message', 'You left the chat'); // Inform the user
        socket.leave(userId); // Leave the user's room
      }
    });
  }
}

function computeUserId(socket: Socket) {
  const ipAddress = socket.handshake.address; // Get the IP address of the socket
  const timestamp = Date.now(); // Get the current timestamp
  const userId = `${ipAddress}_${timestamp}`;
  return userId;
}

export const chatSocket = new ChatSocket();
