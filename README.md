TableCraft

TableCraft is a restaurant website built with Angular, featuring a modern interface for exploring dishes, viewing restaurant information, and interacting with menu items.

Features
Home: Featured dishes and restaurant highlights.
Menu: Browse dishes by category.
Dish Details: View individual dish information and comments.
Comments: Submit ratings and comments for dishes.
About: Learn about the restaurant and its team.
Contact: View contact information and use the contact form.
Responsive Design: Styling for a range of screen sizes.
Built With
Angular
TypeScript
HTML and SCSS
Angular Material
RxJS
Node.js backend API
MongoDB Atlas
Backend

The Angular application communicates with the TableCraft backend API, hosted on Render.

Production API: https://confusion-restaurant-4n5i.onrender.com/api

The backend provides endpoints for dishes, comments, and team information.

Getting Started
Prerequisites
Node.js and npm
Angular CLI
A running backend API
Installation
Clone this repository:
git clone https://github.com/fezile-sudo/TableCraft.git

Navigate into the project:
cd TableCraft

Install dependencies:
npm install

Start the development server:
npm start

Open the local URL shown in the terminal, usually http://localhost:4200.
Environment Configuration

The application uses separate environment files:

src/environments/environment.ts — production API URL.
src/environments/environment.development.ts — local development API URL.

For local development, ensure the backend is running at http://localhost:5000, or update the development API URL to match your backend.

Build

Create a production build with:

npm run build


The generated application files are placed in dist/conFusion/browser.

License

No license has been specified yet.
