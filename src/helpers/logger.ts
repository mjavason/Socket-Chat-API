import winston from 'winston';

// Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'socket-chat-api-service' },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'info.log', level: 'info' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

export default logger;
