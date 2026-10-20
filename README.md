TableCraft — Modern Restaurant Website

TableCraft is a modern, responsive restaurant website built with Angular and TypeScript. It was originally inspired by a Coursera restaurant application project and has since been modernised and customised into a standalone portfolio project.

The application allows users to explore restaurant dishes, view dish details, read and submit comments, learn about the restaurant and its team, and access contact information.

TableCraft connects to a Node.js and Express REST API backed by MongoDB Atlas. The same backend is also used by my React restaurant application, Confusion.

Live Application
Angular Frontend: https://tablecraft-49ea.onrender.com
Backend API: https://confusion-api-69mr.onrender.com
API Base URL: https://confusion-api-69mr.onrender.com/api
GitHub Repository: https://github.com/fezile-sudo/TableCraft
Related React Project: https://github.com/fezile-sudo/Confusion
React Live Application: https://confusion-restaurant-4n5i.onrender.com

The Angular frontend and backend API are deployed separately on Render. MongoDB Atlas provides the production database.

Features
Home Page: Displays featured dishes and restaurant highlights.
Menu: Browse restaurant dishes and their categories.
Dish Details: View individual dish information.
Comments and Ratings: Submit comments and ratings for dishes.
Restaurant Team: View information about the restaurant's team members.
About Page: Learn about the restaurant and its story.
Contact Page: View restaurant contact information and access the contact form.
Responsive Design: Interface designed for different screen sizes.
REST API Integration: Retrieves restaurant data from the shared backend.
Production Deployment: Publicly accessible Angular application hosted on Render.
Technology Stack
Frontend
Angular
TypeScript
HTML5
SCSS
Angular Material
RxJS
Backend and Database
Node.js
Express
REST API
MongoDB Atlas
Mongoose
Tools and Deployment
Git and GitHub
npm
Angular CLI
Render
Application Architecture

TableCraft uses a client-server architecture.

The Angular frontend sends HTTP requests to the backend REST API.
The Express backend processes requests and communicates with MongoDB through Mongoose.
MongoDB Atlas stores the restaurant data.
The API returns responses that the Angular application uses to display the relevant information.

The backend is shared with my React application, Confusion. Both frontends use the same API and database, demonstrating how different frontend frameworks can interact with a common backend service.

Backend API

Production API:
https://confusion-api-69mr.onrender.com/api

The API provides endpoints for restaurant dishes, team members, comments and contact information.

Resource	Method	Endpoint	Purpose
Dishes	GET	/api/dishes	Retrieve all dishes
Dish Details	GET	/api/dishes/:id	Retrieve a specific dish
Team	GET	/api/team	Retrieve restaurant team members
Comments	GET	/api/comments/dish/:dishId	Retrieve comments for a dish
Comments	POST	/api/comments	Submit a comment
Contact	GET	/api/contact	Retrieve contact information
Contact	POST	/api/contact	Submit contact information

The API base URL is configured through Angular's environment configuration.

Production API configuration:

src/environments/environment.ts

Development API configuration:

src/environments/environment.development.ts

The production environment points to the deployed backend API, while the development environment can point to a locally running backend.

Database

The backend uses MongoDB Atlas as its production database.

The database contains collections for:

Dishes
Team members
Comments
Contact messages

Restaurant dishes and team members are retrieved dynamically through the API rather than being maintained solely as static frontend content.

Database credentials and other sensitive configuration values are managed on the backend and should never be committed to the public repository.

Getting Started
Prerequisites

Make sure you have installed:

Node.js
npm
Angular CLI
Git

A running backend API is also required for the application to retrieve restaurant data.

Installation

Clone the repository:

git clone https://github.com/fezile-sudo/TableCraft.git


Navigate to the project directory:

cd TableCraft


Install the dependencies:

npm install


Start the development server:

npm start


Open the local URL displayed in the terminal, usually:

http://localhost:4200

Environment Configuration

The application uses separate environment files for production and local development.

src/environments/environment.ts — production API configuration.
src/environments/environment.development.ts — development API configuration.

The production API base URL is:

https://confusion-api-69mr.onrender.com/api

For local development, update the development API URL to match the backend you are running.

Do not place MongoDB credentials or private backend configuration in the Angular frontend. Frontend environment values are included in the browser build and are publicly accessible.

Production Build

To create a production build, run:

npm run build


The generated build files are placed in:

dist/conFusion/browser

The production build can then be deployed to a static web hosting service such as Render.

Deployment

The application is deployed on Render.

The Angular frontend is hosted separately from the backend.
The backend API runs as a separate service.
MongoDB Atlas provides persistent database storage.
The production Angular configuration points to the deployed API.

After changes are pushed to GitHub, Render can automatically deploy the updated application when automatic deployments are enabled.

Related Project: Confusion (React)

TableCraft is part of a pair of related restaurant application projects.

The React version, Confusion, uses React for the frontend and shares the same Express API and MongoDB Atlas database.

Angular Version: https://github.com/fezile-sudo/TableCraft
React Version: https://github.com/fezile-sudo/Confusion

Developing both versions demonstrates my ability to work with different frontend technologies while integrating with a shared backend service.

Project Purpose

This project demonstrates practical experience with frontend development, REST API integration, database-backed content, environment configuration, production builds and cloud deployment.

It began as a learning project and was subsequently modernised and customised to reflect my own development work and serve as a portfolio project.

License

No license has been specified for this repository.
