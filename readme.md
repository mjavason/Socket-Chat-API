# Socket Chat API

## Overview

The Socket Chat API is a WebSocket-based backend for real-time chat applications. The API allows users to connect to chat rooms, exchange messages, and experience real-time communication. It is currently hosted live at [Livechat API](https://socket-chat-wd2a.onrender.com).

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

## Sample Frontend Usage

To use the Socket Chat API in your frontend application, follow these steps:

1. Include the Socket.io library in your HTML file. You can use the following script tag to load it:

   ```html
   <script type="module" src="https://cdn.socket.io/4.4.1/socket.io.esm.min.js"></script>
   ```

2. Create an instance of the Socket.io client and connect to the server:

   ```javascript
   const serverUrl = 'http://localhost:5000'; // Replace with your server URL
   const socket = io(serverUrl, {
     auth: {
       token: 'YOUR_AUTH_TOKEN', // Pass your authentication token here
     },
   });
   ```

3. Start listening to events from the server. For example, you can listen for a "hello" event:

   ```javascript
   socket.on('hello', (arg1, arg2, arg3, arg4) => {
     console.log(arg1); // Handle the event data as needed
   });
   ```

4. Send messages to the server by emitting events. For instance, to send a chat message:

   ```javascript
   const message = 'Hello, chat room!'; // Replace with your message
   socket.emit('chat', message);
   ```

5. Handle incoming messages and other events from the server as needed:

   ```javascript
   socket.on('reply', (arg1) => {
     console.log(arg1); // Handle incoming messages
   });
   ```

6. Close the socket connection when you're done:

   ```javascript
   socket.close();
   ```

That's it! You can now integrate the Socket Chat API into your frontend application to enable real-time chat functionality.

## Security

Please ensure that you handle authentication and security measures properly when using this API in your frontend application. The example code above includes an authentication token, but you may need additional security measures depending on your use case.

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
