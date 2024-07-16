Contact Manager App
A robust Contact Manager app built with Node.js, Express.js, and MongoDB, enabling efficient CRUD operations for user and contact management. Implements JWT-based authentication for secure access and comprehensive error handling for reliable performance.

Features
User Registration and Authentication
JWT-based Authentication
CRUD operations for Contacts
Secure Password Hashing with bcrypt
Detailed Error Handling
MongoDB Database Integration
Technologies Used
Node.js
Express.js
MongoDB
Mongoose
bcrypt
JWT (jsonwebtoken)
dotenv
Prerequisites
Node.js
MongoDB

Sample API Endpoints
User Routes
Register User


POST /api/users/register
Request Body:

json
{
  "username": "exampleuser",
  "email": "user@example.com",
  "password": "userpassword"
}
Login User

POST /api/users/login
Request Body:


{
  "email": "user@example.com",
  "password": "userpassword"
}
Get Current User

GET /api/users/current
Contact Routes
Get All Contacts


GET /api/contacts
Create New Contact


POST /api/contacts
Request Body:

{
  "name": "Contact Name",
  "email": "contact@example.com",
  "phone": "123-456-7890"
}
Get Contact by ID

GET /api/contacts/:id
Update Contact


PUT /api/contacts/:id
Request Body:

{
  "name": "Updated Name",
  "email": "updated@example.com",
  "phone": "098-765-4321"
}

Delete Contact

DELETE /api/contacts/:id
Error Handling
All API endpoints provide appropriate error responses for invalid requests or server errors. Errors are handled using a custom error handling middleware.

Authentication
JWT is used for securing endpoints. Protected routes require a valid JWT token in the Authorization header.
