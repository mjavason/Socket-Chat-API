
# Football-Live-Scores-API
Typescript and Express-based API for real-time football score notifications: halftime, full time, fouls, and goals. Stay updated with the game!

## Table of Contents
- [Overview](#overview)
- [Getting Started](#getting-started)
- [Features](#features)
- [Environment Variables](#environment-variables)
- [Sample Usage](#sample-usage)
- [Documentation](#documentation)
- [Contributing](#contributing)

## Overview

The Football Live Score API provides real-time football match information, including push notifications for halftime, full time, fouls, and goals. The API allows users to subscribe to match updates and stay connected to the action. Currently hosted live at [Football Live Score API](https://football-livescore.onrender.com).

## Getting Started

To set up and run the Football Live Score API, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/mjavason/Football-Live-Scores-API.git
   ```

2. Navigate to the project directory:

   ```shell
   cd football-livescore-api
   ```

3. Install the required dependencies:

   ```shell
   npm install
   ```

4. Set up the environment variables by creating a `.env` file in the root directory. Refer to the "Environment Variables" section below for details.

5. Build the TypeScript code:

   ```shell
   npm run build
   ```

6. Start the server:

   ```shell
   npm start
   ```

The API will be accessible at `http://localhost:5000` by default.

## Features

- **Real-time Updates**: Receive live football match updates, including halftime, full time, fouls, and goals, in real-time.

- **Subscription Service**: Users can subscribe to specific matches or events to receive push notifications.

## Environment Variables

Before running the API, make sure to set up the following environment variables in your `.env` file:

```env
ACCESS_TOKEN_SECRET=your-access-token-secret
APP_NAME=Football Live Score App
JWT_SECRET=your-jwt-secret
MONGODB_URL=your-mongodb-url
MONGO_DB_NAME=your-mongodb-database-name
REFRESH_TOKEN_SECRET=your-refresh-token-secret
USERNAME=user@mail.com
SITE_LINK=your-app-website-link
MAIL_ADDRESS=your-mail-address@mail.com
MAIL_PASSWORD=your-mail-password
PUBLIC_VAPID_KEY=your-public-vapid-key
PRIVATE_VAPID_KEY=your-private-vapid-key
```

## Sample Usage

### Subscribing to Match Updates

To subscribe to match updates, make a POST request to the `/subscribe` endpoint of the API with the necessary parameters.

Example using curl:

```bash
curl -X POST https://football-livescore.onrender.com/subscribe -d "matchId=your-match-id&userId=your-user-id"
```

## Documentation

For detailed documentation on how to use the Football Live Score API and its endpoints, refer to the [API Documentation](https://documenter.getpostman.com/view/29278179/2s9YJaWiZz).

## Contributing

Contributions to the Football Live Score API are welcome! If you'd like to contribute:

1. Fork the project on GitHub.

2. Create a new branch for your changes.

3. Make your improvements or additions.

4. Thoroughly test your changes.

5. Create a pull request with a clear description of your changes.

Contributions that improve functionality, performance, and user experience are highly appreciated.
