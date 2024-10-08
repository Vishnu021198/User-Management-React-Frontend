# User Management Frontend

## Overview

This frontend project provides a user interface for the user management system built with React and Tailwind CSS. It allows users to interact with the backend API for user registration, login, and management.

## Features

- **Home Page:** Displays a welcome message and a logout button.
- **Protected Routes:** Ensures that users cannot access the homepage without being authenticated.
- **Login and Logout:** Manages user authentication state and provides functionality to log out.

## Requirements

- Node.js (version 14.x or later)
- npm or yarn

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Vishnu021198/User-Management-React-Frontend.git
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

   or if you prefer `yarn`:

   ```bash
   yarn install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the `frontend` directory and add the following:

   ```env
   REACT_APP_API_BASE_URL=http://localhost:8000/api
   ```

   Replace `http://localhost:8000/api` with the URL of your backend API if it's different.

4. **Run the Development Server:**

   ```bash
   npm start
   ```

   or if you prefer `yarn`:

   ```bash
   yarn start
   ```

   The application will be available at `http://localhost:3000`.

## Components

- **HomePage:** Displays the welcome message and the logout button.
- **LoginPage:** Handles user login and redirects based on authentication state.

## Authentication

- The application uses JWT tokens for authentication.
- Tokens are stored in `localStorage` and used for API requests.

## Protected Routes

- The `HomePage` component checks for the presence of a token in `localStorage`. If a token is not found, the user is redirected to the login page.

## Development

- To add or modify features, update the React components in the `src` directory.
- Use Tailwind CSS for styling. Configuration can be found in `tailwind.config.js` and `postcss.config.js`.