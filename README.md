# JWT Authentication System

A full-stack JWT authentication system with Node.js backend and React frontend.

## Features
- ✅ User Registration & Login
- ✅ Password hashing with bcrypt
- ✅ JWT token-based authentication
- ✅ Protected routes with React Context
- ✅ MongoDB database integration

## Tech Stack
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, CORS
- **Frontend**: React, Context API, Axios

## Setup Instructions

### Backend Setup
1. Navigate to backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Create `.env` file with the following variables:
4. Start MongoDB service
5. Run development server: `npm run dev` or `node server.js`

### Frontend Setup
1. Navigate to frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start development server: `npm start`

## API Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

## Environment Variables
Create `.env` file in backend directory:

```env
MONGODB_URI=mongodb://localhost:27017/auth-app
JWT_SECRET=your_super_secret_jwt_key_here
PORT=5000
