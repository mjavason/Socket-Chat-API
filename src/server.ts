import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import 'express-async-errors';
import app from './app';
import logger from './helpers/logger';
import { connectToDatabase } from './config/db';
import { startDefaultNamespace } from './namespaces/default.namespace';

// Setting up server
const PORT = process.env.PORT || 5000;

// Create an instance of the HTTP server
const httpServer = createServer(app);

// Create an instance of the Socket.io server attached to the HTTP server
const io = new Server(httpServer, {
  cors: {
    origin: '*', // Replace with your frontend URL
    methods: ['GET', 'POST'],
  },
  // options
});

const server = httpServer.listen(PORT, async () => {
  await connectToDatabase();
  startDefaultNamespace(io);
  logger.info(`Server running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(err);

  // Close server
  server.close(() => process.exit(1));
});
