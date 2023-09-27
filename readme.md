# Socket Chat API

## Overview

The Socket Chat API is a WebSocket-based backend for real-time chat applications.  The API allows users to connect to chat rooms, exchange messages, and experience real-time communication. Currently hosted live at [Livechat API](https://socket-chat-wd2a.onrender.com)

## Getting Started

To set up and run the Socket Chat API, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/mjavason/Socket-Chat-API.git
   ```

2. Navigate to the project directory:

   ```shell
   cd socket-chat-api
   ```

3. Install the required dependencies:

   ```shell
   npm install
   ```

4. Build the TypeScript code:

   ```shell
   npm run build
   ```

5. Start the server:

   ```shell
   npm start
   ```

The API will be accessible at `http://localhost:5000` by default.

## Features

- **WebSocket-Based Chat**: The API uses WebSocket for real-time chat communication, allowing users to send and receive messages instantly.

- **Chat Rooms**: Users can join different chat rooms based on their preferences or topics of interest.

- **Message Broadcasting**: Messages sent by one user are broadcasted to all participants in the same chat room.

## Security

This API provides the foundation for real-time chat but may require additional security measures, such as message encryption, for production-ready chat applications. Consider implementing these measures to enhance security.

## Sample Usage

### Joining a Chat Room

To join a chat room using the Socket Chat API, you can connect to a WebSocket endpoint and specify the chat room name as part of the connection URL:

```javascript
const socket = new WebSocket('ws://localhost:3000/chat?room=your-room-name');
```

### Sending and Receiving Messages

Once connected to a chat room, you can send and receive messages using WebSocket events:

```javascript
// Sending a message
socket.send('Hello, chat room!');

// Receiving a message
socket.addEventListener('message', (event) => {
  const message = event.data;
  console.log('Received message:', message);
});
```

### Leaving a Chat Room

To leave a chat room, you can close the WebSocket connection:

```javascript
socket.close();
```

## Documentation

For detailed documentation on how to use the Socket Chat API and its WebSocket endpoints, refer to the [Socket Chat API Documentation](https://documenter.getpostman.com/view/29278179/2s9YJZ3PeE).

## Contributing

Contributions to the Socket Chat API are welcome! If you'd like to contribute:

1. Fork the project on GitHub.

2. Create a new branch for your changes.

3. Make your improvements or additions.

4. Thoroughly test your changes.

5. Create a pull request with a clear description of your changes.

Contributions that improve functionality, performance, and user experience are highly appreciated.

## Acknowledgments

The Socket Chat API project appreciates the support of the open-source community and contributors. Your contributions in code, testing, and documentation help make this API a valuable tool for real-time communication.
