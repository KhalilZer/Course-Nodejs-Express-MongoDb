# Node.js Express & MongoDB - User Guide
This project is a practical guide to learn how to use Node.js and Express with a connection to a MongoDB database. It includes route management, HTTP requests, and interaction with MongoDB.

## Installation  
### 1️⃣ Prerequisites  
Before you begin, make sure you have installed:
- [Node.js](https://nodejs.org/) (recommended version: 16+)
- [MongoDB](https://www.mongodb.com/try/download/community) (or an account on MongoDB Atlas)
- [Postman](https://www.postman.com/) (optional for testing APIs)

### 2️⃣  Clone the project
```sh
git clone https://github.com/KhalilZer/Course-Nodejs-Express-MongoDb.git
cd Course-Nodejs-Express-MongoDb
```

### 3️⃣ Install dependencies
Run the following command to install all necessary dependencies:
```sh
npm install
```
### 4️⃣ Configure MongoDB  

Create a `.env` file at the root of the project and add the connection information:

```env
MONGO_URI=mongodb://127.0.0.1:27017/monApp  
PORT=5000
```
### 5️⃣ Start the server

Make sure all dependencies are properly installed, then start the server with:

```sh
npm install  # Check dependencies  
npm start    # Start the server in production mode   

# Or for development mode with nodemon 
npm run dev
```

## Author

This guide was created by [Khalil Zer](https://github.com/KhalilZer).  
Feel free to check out more of my projects and contributions on GitHub.  

For any questions or suggestions, you can reach out to me via my GitHub or email.



