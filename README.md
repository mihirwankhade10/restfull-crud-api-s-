# RESTful CRUD API using Express.js and MongoDB

This is a simple RESTful API project that allows you to perform CRUD (Create, Read, Update, Delete) operations on a collection in a MongoDB database. It is built using Express.js as the web framework and MongoDB as the database.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose (ODM)
- ThunderClient (API testing)


## Setup

The server will start running at http://localhost:3000.

## API Endpoints

GET /api/items: Retrieve all items from the database.
GET /api/items/:id: Retrieve a specific item by its ID.
POST /api/items: Create a new item in the database.
PUT /api/items/:id: Update an existing item by its ID.
DELETE /api/items/:id: Delete an item by its ID.

## Testing with ThunderClient

Install the ThunderClient extension in your preferred browser (e.g., Chrome).
Open ThunderClient and create a new request.
Enter the request URL based on the API endpoint you want to test (e.g., http://localhost:3000/api/items).
Set the request method (e.g., GET, POST, PUT, DELETE).
If required, add request body and headers.
Click the Send button to send the request and view the response.

## Screenshots
- <img width="960" alt="create a new item" src="https://github.com/mihirwankhade10/restfull-crud-api-s-/assets/87888969/b55fe727-3056-45b9-8fd3-5c9deeec1ab4">

- <img width="960" alt="get all items" src="https://github.com/mihirwankhade10/restfull-crud-api-s-/assets/87888969/76965347-387a-4ac0-bae0-77e16edda0e6">

- <img width="960" alt="update an existing item" src="https://github.com/mihirwankhade10/restfull-crud-api-s-/assets/87888969/60c030a9-7c62-4c63-9559-b9277b073157">

- <img width="960" alt="delete an item" src="https://github.com/mihirwankhade10/restfull-crud-api-s-/assets/87888969/9c4ac867-9f45-4ebc-8ad2-2bc663d96b72">

- <img width="960" alt="Get a specific item by id" src="https://github.com/mihirwankhade10/restfull-crud-api-s-/assets/87888969/25b343f5-f90c-48ba-9752-092408e39548">
