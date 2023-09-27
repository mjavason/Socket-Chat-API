import express, { Response } from 'express';
import expressWs from 'express-ws';
import WebSocket from 'ws';
import { STATUS_CODES, LINKS, MESSAGES } from './constants';
import rootRoutes from './routes';
import preMiddleware from './middleware/pre.middleware';
import { SuccessMsgResponse } from './helpers/response';

const app = express();
const { getWss, app: wsApp } = expressWs(app);

preMiddleware(app);

//default response
app.get('/', (res: Response) => SuccessMsgResponse(res, MESSAGES.DEFAULT));

//documentation redirect
app.get('/docs', (req, res) => {
  res.redirect(LINKS.API_DOCUMENTATION);
});

// importe all routes
app.use('/api', rootRoutes);

// Handle 404 errors
app.use((req, res, next) => {
  res
    .status(404)
    .send({ status_code: STATUS_CODES.FAILURE, message: MESSAGES.ROUTE_NOT_FOUND, success: false });
});

// Set up a WebSocket route at '/chat'
wsApp.ws('/chat', (ws: WebSocket, req: express.Request) => {
  // Listen for incoming WebSocket messages
  ws.on('message', (message: string) => {
    // Broadcast the received message to all connected clients
    getWss().clients.forEach((client: WebSocket) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

export default app;
