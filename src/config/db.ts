import mongoose from 'mongoose';
import { DB_CONNECTION_STRING } from '../constants';
import logger from '../helpers/logger';

export async function connectToDatabase() {
  try {
    console.log('Trying to connect to', DB_CONNECTION_STRING);
    await mongoose.connect(DB_CONNECTION_STRING, {
      autoIndex: false, // Don't build indexes
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 50000, // Close sockets after 45 seconds of inactivity
      family: 4, // Use IPv4, skip trying IPv6
    });
    logger.info('Connected to database');
  } catch (e) {
    console.log(e);
    logger.error('Failed to connect to database, Goodbye');
    process.exit(1);
  }
}

export async function disconnectFromDatabase() {
  await mongoose.connection.close();
  logger.info('Disconnected from database');
  return;
}
