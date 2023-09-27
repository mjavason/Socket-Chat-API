
# Country Trivia App

## Overview

The Country Trivia App is a simple trivia game API that generates quizzes based on users' IP locations. It provides a fun and interactive way for users to test their knowledge about different countries. Currently hosted live at [Trivia Quiz App](https://bank-app-ef40.onrender.com)

## Getting Started

To use the Country Trivia App API, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/mjavason/Trivia-Quiz-API.git
   ```

2. Navigate to the project directory:

   ```shell
   cd country-trivia-app
   ```

3. Configure environment variables by creating a `.env` file in the root directory. Here's a sample `.env` file:

   ```env
   ACCESS_TOKEN_SECRET=your_access_token_secret
   APP_NAME=CountryTriviaApp
   JWT_SECRET=your_jwt_secret
   MONGODB_URL=your_mongodb_uri
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   USERNAME=user@example.com
   SITE_LINK=your_site_link
   MAIL_ADDRESS=your_mail_address
   MAIL_PASSWORD=your_mail_password
   ```

4. Install the required dependencies:

   ```shell
   npm install
   ```
5. Ensure you have Node.js installed on your computer.
6. Build the TypeScript code using 
   ```shell
   npm run build
   ```
7. Start the server locally using one of the following commands:

   - For local development with automatic code reloading (using nodemon):
     ```bash
     npm run dev
     ```
   - For running the production-ready build:
     ```bash
     npm start
     ```


The API will be accessible at `http://localhost:5000` by default. Make sure to replace the environment variables with your actual values.

## IP Location-Based Quizzes

The Country Trivia App's key feature is its ability to generate quizzes based on the user's IP location:

1. **IP Location Detection**: The API automatically detects the user's IP location using a geolocation service.

2. **Country Identification**: It determines the user's country or region based on their IP address.

3. **Quiz Generation**: Using the detected location, the API fetches quiz questions related to that country or region.

4. **Personalized Quiz**: The API assembles a personalized quiz for the user, featuring questions and trivia specific to their location.

## Security

Please note that this is a demo project and may not implement advanced security measures. If you plan to use it in a production environment, consider enhancing its security features.

## Sample Usage

### User Registration

To register a new user with the Country Trivia App API, you can make a POST request to the `/api/v1/auth/register` endpoint with the following JSON payload:

**Request:**

```http
POST /api/v1/auth/register
Content-Type: application/json

{
  "firstname": "John",
  "lastname": "Doe",
  "email": "johndoe@example.com",
  "password": "secure_password"
}
```

**Response:**

A successful registration will yield a JSON response like this:

```json
{
  "success": true,
  "status_code": "10000",
  "message": "Registration successful",
  "data": {
    "_id": "5f8a12a3e055b1246890d4ad",
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "role": "user",
    "points": 0,
    "createdAt": "2023-09-25T11:00:00.000Z",
    "updatedAt": "2023-09-25T11:00:00.000Z"
  }
}
```

In this example:

- You provide the user's `firstname`, `lastname`, `email`, and `password` in the request body.
- The API registers the user and returns a JSON response indicating a successful registration, along with the user's details such as their `_id`, `firstname`, `lastname`, `email`, `role`, and `createdAt` timestamp.


## Documentation

For detailed information about using the app's API and endpoints, consult the [Country Trivia App Documentation](https://documenter.getpostman.com/view/29278179/2s9YJZ2Pep).

## Contributing

Contributions to the Country Trivia App are welcome! If you'd like to contribute:

1. Fork the project on GitHub.

2. Create a new branch for your changes.

3. Make your improvements or additions.

4. Thoroughly test your changes.

5. Create a pull request with a clear description of your changes.

Contributions that enhance security, performance, and user experience are particularly valuable.

## Acknowledgments

The Country Trivia App project has benefited from the collaboration and support of colleagues, mentors, and friends. Their contributions in coding, design, testing, data management, and advice have been invaluable. Thank you to all who have been a part of this project.
