import { Server, Socket } from 'socket.io';

export function startChatNamespace(io: Server) {
  const chatNamespace = io.of('/chat'); // Create a new namespace '/chat'

  chatNamespace.on('connection', async (socket: Socket) => {

  });
}
