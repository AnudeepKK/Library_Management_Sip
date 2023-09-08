# Book Library Application

## Introduction

Create a comprehensive book library application that empowers administrators to seamlessly add, search, and categorize books within their collection. Meanwhile, customers gain access to a wealth of book collections, fostering an enriching reading experience.

## Features

### Admin Registration and Authentication:

- Admin can create an account and log in securely.
- Admin authentication will be implemented to ensure data privacy so that control is in the hands of the admin.

### Book Management:

- Admin can add new books to their library by entering book details such as title, author, genre, publication date, and book cover image.
- Admin can also edit and delete books from their library.
- Customers can only read the books but have no access to the database to avoid unwanted changes.

### Book Search and Filtering:

- Users can search for books in the library based on various criteria such as title, author, or genre.
- Filtering options will help users find books based on different parameters.

### User Interface and Experience:

- The application will have a responsive and intuitive user interface for seamless usage across devices.
- User-friendly interactions and visualizations will enhance the user experience.

## Problem Statement

The Book Library project aims to create a web application that allows admins to manage and organize the library book collections. Admins will be able to keep track of their books, add new books, delete and update books. The customer will only be able to read the books and they can also use filters to get desired books. The project will be built using the MERN stack (MongoDB, Express.js, React, and Node.js) to ensure a full-stack development approach.

## Solution

### System Requirements

**MERN Stack:**

- **MongoDB:** A versatile NoSQL database to efficiently store and manage your book information and user data.
- **Express JS:** The powerhouse backend framework that simplifies API development, streamlines server-side logic, and interfaces seamlessly with MongoDB.
- **React:** Your trusted frontend library for crafting dynamic, interactive, and visually stunning user interfaces that connect effortlessly with your Express backend.
- **Node JS:** The server-side JavaScript runtime environment that enables the use of JavaScript across your entire application stack, making integration with React and Express a breeze.
- **Axios:** A powerful HTTP client for Node.js and browsers that simplifies sending HTTP requests to your Express API.
- **JavaScript (JS):** The language that powers the dynamic behavior of your web application, whether it's on the frontend with React or on the backend with Express and Node.js.
- **bcrypt:** A robust library for securely hashing and storing passwords, enhancing the security of your user data in MongoDB.
- **JSON Web Token (JWT):** A standard for securely transmitting information between parties as a compact and self-contained token, often used for authentication and authorization in your application.

## Credits  😇
- 👤 [ChethanPai](https://github.com/CheetahCodes21)
- 👤 [Anudeep KK](https://github.com/AnudeepKK)
- 👤 [Nishanth Bhat](https://github.com/BhatNishanthGanesh)
##

# Frontend 

## Project Setup

### Setting Up Your React Project

- Start by creating a new React project using a tool like Create React App or by configuring a custom setup, depending on your preferences and project requirements.
- Organize your project structure with clear directories for components, styles, images, and other assets. A well-structured project makes it easier to manage and collaborate with others.

## Admin Authentication

### Implementing Admin Authentication

- Create registration and login forms for admin users using React components.
- Integrate authentication libraries such as Firebase or implement custom authentication logic depending on your project's needs.
- Manage admin sessions and tokens to keep admins authenticated across different parts of the application.

## User Interface Design

### Designing the User Interface (UI)

- Craft a visually appealing user interface for your application using React components.
- Utilize a styling framework like CSS, Bootstrap, or styled-components to style your components and pages.
- Ensure that your UI is responsive, adapting gracefully to different screen sizes using Bootstrap or responsive design techniques.
- Design components for displaying book entries, forms, buttons, and navigation elements, maintaining a consistent and user-friendly design.

## Display Book Collection

### Showing the Book Collection

- Develop a component responsible for fetching and displaying the library's book collection.
- Use a library like Axios to fetch data from the backend API.
- Organize and display book entries in a visually pleasing and structured manner, possibly utilizing grid or list layouts.

## Add New Book

### Adding New Books

- Design a form component that enables users to input new book details such as title, author, genre, publication year, and cover image.
- Implement form validation to ensure accurate and complete data entry while providing helpful error messages for validation failures.
- Handle form submissions, sending the entered data to the backend API for storage and updating the book collection.

## Search and Filters

### Implementing Search and Filters

- Develop a search bar component that allows users to search for books by title, author, or other relevant criteria.
- Implement filtering options that enable users to narrow down the displayed book collection based on specific attributes or genres.
- Update the displayed results in real-time as users input search queries or apply filters, providing a dynamic and responsive user experience.

## Edit and Delete Books

### Editing and Deleting Books

- Add functionality to edit and delete book entries.
- Implement edit and delete buttons within each book entry, triggering modal dialogs or confirmation prompts for user interaction.
- Ensure that the UI and backend data are updated accordingly when users make changes, guaranteeing data consistency.

## UI/UX Enhancements

### Enhancing User Interface and Experience

- Enhance the user experience with smooth animations and transitions that provide a polished and engaging feel to your application.
- Consider adding tooltips, hover effects, and subtle animations to improve interactivity and make the application more user-friendly.
- Maintain consistent typography, color schemes, and design patterns throughout the app to establish a cohesive and professional look.

## Error Handling and Feedback

### Handling Errors and Providing Feedback

- Implement a robust error-handling system to display meaningful error messages for scenarios like failed API requests or validation errors.
- Provide users with clear and informative feedback on successful actions, such as book additions, deletions, or updates, to keep them informed and engaged with the application.

By following these guidelines and continuously refining your frontend codebase, you can create a well-designed and user-friendly book management system that offers a seamless experience for both admins and users.

# Backend

## Project Overview

This backend component serves as the server-side logic for a book management system. It handles various CRUD (Create, Read, Update, Delete) operations for books. The backend is built using Node.js and MongoDB for data storage.

## File Structure

- **bookcontroller.js**: This file contains the controller functions for handling book-related operations.
- **valid.js**: It includes utility functions for input validation.
- **bookmodel.js**: This file defines the data schema for books using Mongoose, which is an Object Data Modeling (ODM) library for MongoDB.
- **user-model.js**: This file defines the data schema for users, but it seems to be unrelated to the book management system.
- **create_user.js**: This file defines routes and controller functions for user registration and authentication. It also uses validation middleware.
- **route.js**: This file defines the main API routes for the book management system, including routes for adding, reading, updating, and deleting books.
- **index.js**: The entry point of the backend application. It sets up the Express server, connects to the MongoDB database, and defines the API routes.

## Controllers (bookcontroller.js)

### `addBook(req, res)`

- Description: This function adds a new book to the database.
- Input: HTTP request containing book data in the request body.
- Output: HTTP response with a success message and the added book's data or an error message if validation or database operation fails.

### `readBook(req, res)`

- Description: This function retrieves all books from the database.
- Input: None.
- Output: HTTP response with a list of books or an error message if the database operation fails.

### `updateBook(req, res)`

- Description: This function updates book information based on the provided book name.
- Input: HTTP request containing the book name and updated data in the request body.
- Output: HTTP response with a success message and the updated book's data or an error message if validation, book not found, or database operation fails.

### `deleteBook(req, res)`

- Description: This function deletes a book based on the provided book name.
- Input: HTTP request containing the book name in the request body.
- Output: HTTP response with a success message and the deleted book's data or an error message if validation, book not found, or database operation fails.

## Validation (valid.js)

The `valid.js` file contains two utility functions for input validation:

### `isvalid(value)`

- Description: Checks if a value is defined, not null, and not an empty string or zero.
- Input: Value to be validated.
- Output: Returns `true` if the value is valid; otherwise, returns `false`.

### `isvalidBody(requestBody)`

- Description: Checks if an object (request body) has at least one key.
- Input: Request body (an object).
- Output: Returns `true` if the request body is valid (contains keys); otherwise, returns `false`.

## MongoDB Schema (bookmodel.js)

This file defines the data schema for books using Mongoose. The schema includes the following fields:

- `Image`: The book's image link (string, required, unique).
- `Name`: The book's title (string, required, unique).
- `Author`: The book's author (string, required).
- `Genre`: The book's genre (string, required).
- `Public`: The book's publication date (string, required).
- `timestamps`: This schema includes timestamps for when a book is created or updated.

## User Authentication (user-model.js and create_user.js)

The `user-model.js` file defines a schema for user data, but it seems unrelated to the book management system. It might be intended for user authentication, registration, and authorization.

The `create_user.js` file defines routes and controller functions for user registration and authentication using email and password. It includes validation middleware for email and password fields and uses bcrypt for password hashing and JWT for authentication.

## Setup and Usage

1. Clone the repository and navigate to the backend directory.

2. Install dependencies by running:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

   The server will run on port 3500 by default.

4. You can now make API requests to manage books and, if needed, user registration and authentication using the provided routes.

## Dependencies

- Express.js: A Node.js web application framework for building APIs.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB.
- bcryptjs: A library for hashing passwords.
- jsonwebtoken (JWT): A library for creating and verifying JSON Web Tokens.
- cors: Middleware for enabling Cross-Origin Resource Sharing.

Make sure you have Node.js and MongoDB installed on your system before running the application.

##

The above task has been rigorously developed entirely from scratch by [ChethanPai](https://github.com/CheetahCodes21), [Anudeep KK](https://github.com/AnudeepKK) and [Nishanth Bhat](https://github.com/BhatNishanthGanesh)
