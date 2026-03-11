# Build REST API

A RESTful API built with Node.js, Express, and MongoDB. This project provides CRUD (Create, Read, Update, Delete) operations for a `User` model.

## Features
- **Express.js** for handling routing and HTTP requests.
- **MongoDB** with **Mongoose** for data storage and object modeling.
- **Custom Logging** middleware to keep track of request/response details in `log.txt`.
- **Nodemon** for automatic server restarts during development.
- **MVC Architecture** with separated routes, controllers, and models.

## Prerequisites
- **Node.js**: Ensure Node.js is installed on your machine.
- **MongoDB**: A running instance of MongoDB locally at `mongodb://127.0.0.1:27017/youtube` (or update `index.js` with your MongoDB connection string).

## Installation

1. Clone this repository or navigate to the project directory:
   ```bash
   cd BUILD-REST-API
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Usage

To start up the development server using `nodemon`:
```bash
npm start
```
The server will start on `http://localhost:5000`.

## API Endpoints

All User API endpoints are prefixed with `/api/users`.

### 1. Get All Users
- **Method:** `GET`
- **URL:** `/api/users`
- **Description:** Returns JSON data for all users in the database.

### 2. Get User By ID
- **Method:** `GET`
- **URL:** `/api/users/:id`
- **Description:** Returns JSON data for a specific user.

### 3. Create a New User
- **Method:** `POST`
- **URL:** `/api/users`
- **Content-Type:** `application/x-www-form-urlencoded`
- **Required Fields:**
  - `first_name`
  - `last_name`
  - `email`
  - `gender`
  - `job_title`
- **Description:** Creates a new user in the database.

### 4. Update User By ID
- **Method:** `PATCH`
- **URL:** `/api/users/:id`
- **Description:** Partially updates an existing user by ID.

### 5. Delete User By ID
- **Method:** `DELETE`
- **URL:** `/api/users/:id`
- **Description:** Removes a user from the database by their ID.

## Project Structure

- `index.js` - Main entry point of the application. Sets up middlewares, database connection, and routing.
- `connection.js` - Holds the logic to connect to MongoDB.
- `routes/` - Contains route definitions (e.g., `user.js`).
- `controllers/` - Contains business logic for the routes.
- `models/` - Contains Mongoose schemas (e.g., `user.js`).
- `middlewares/` - Contains custom middleware functions (e.g., logging).
- `views/` - Reserved for server-side rendered views.
- `log.txt` - Output file for custom request logging.
