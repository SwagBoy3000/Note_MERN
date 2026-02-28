# 📝 Note MERN Application

> *A full-stack note-taking application built with MongoDB, Express, React, and Node.js. Create, edit, delete, and manage your notes with a clean REST API.*

## 🌟 Highlights

- **Full MERN Stack** - Complete MongoDB, Express, React, and Node.js implementation
- **RESTful API** - Well-structured backend with CRUD operations
- **Rate Limiting** - Built-in API rate limiting for security (10 requests/minute)
- **Modern Frontend** - React with Vite for fast development and builds
- **Robust Error Handling** - Comprehensive error handling on all endpoints
- **MongoDB Integration** - Efficient database operations with Mongoose

## ℹ️ Overview

**Note MERN** is a full-stack web application that demonstrates modern web development practices using the MERN stack. The application provides a complete note-taking solution with a RESTful API backend and a React-based frontend. It showcases clean code architecture, proper database modeling, and secure API design with rate limiting middleware.

### ✍️ Author

This project was built by **SwagBoy3000** to demonstrate proficiency in full-stack JavaScript development, RESTful API design, and modern web application architecture.

## 🚀 Quick Start

```bash
# Backend Setup
cd backend
npm install
npm start

# Frontend Setup (in a new terminal)
cd frontend
npm install
npm run dev
```

## 🎮 Features

### 🗄️ **Backend API**
- **GET /api/note** - Fetch all notes (sorted by creation date)
- **GET /api/note/:id** - Fetch a specific note by ID
- **POST /api/note** - Create a new note
- **PUT /api/note/:id** - Update an existing note
- **DELETE /api/note/:id** - Delete a note

### 🛡️ **Security Features**
- Rate limiting (10 requests per minute per IP)
- Input validation and error handling
- MongoDB injection protection via Mongoose

### 📊 **Database Model**
```javascript
{
  title: String (required),
  content: String (required),
  timestamps: true (createdAt, updatedAt)
}
```

### ⚛️ **Frontend**
- React with modern hooks
- Vite for fast development
- React Router for navigation
- Clean component architecture

## 📋 API Examples

### Creating a Note
```bash
curl -X POST http://localhost:5000/api/note \
  -H "Content-Type: application/json" \
  -d '{"title":"My First Note","content":"This is the content"}'
```

### Fetching All Notes
```bash
curl http://localhost:5000/api/note
```

### Updating a Note
```bash
curl -X PUT http://localhost:5000/api/note/[note_id] \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Title","content":"Updated content"}'
```

### Deleting a Note
```bash
curl -X DELETE http://localhost:5000/api/note/[note_id]
```

## ⬇️ Installation

### Requirements
- Node.js 16.0 or higher
- MongoDB (local or MongoDB Atlas)
- npm or yarn package manager

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file with:
# PORT=5000
# MONGO_URI=your_mongodb_connection_string

# Start the server
npm start
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🏗️ Project Structure

```
Note_MERN/
├── backend/
│   └── src/
│       ├── config/
│       │   └── db.js              # MongoDB connection
│       ├── controllers/
│       │   └── notesControllers.js # CRUD operations
│       ├── middleware/
│       │   └── rateLimiter.js     # Rate limiting
│       ├── models/
│       │   └── Note.js            # Note schema
│       ├── routes/
│       │   └── notesRoutes.js     # API routes
│       └── server.js              # Express server
├── frontend/
│   └── src/
│       ├── pages/
│       │   └── CreatePage.jsx     # Create note page
│       ├── App.jsx                # Main app component
│       └── main.jsx               # Entry point
└── README.md
```

## 🧩 Code Architecture

### Key Components

#### Backend
- `server.js` - Express server setup with middleware
- `db.js` - MongoDB connection with Mongoose
- `notesControllers.js` - Business logic for note operations
- `notesRoutes.js` - API endpoint definitions
- `rateLimiter.js` - Rate limiting middleware (10 req/min)

#### Frontend
- `App.jsx` - Root component with routing
- `CreatePage.jsx` - Note creation interface
- `main.jsx` - React app initialization with Router

### Database Schema
```javascript
const noteSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
}, { timestamps: true });
```

## 🛠️ Technologies Used

### Backend
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **express-rate-limit** - API rate limiting
- **dotenv** - Environment variables

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **React Router** - Client-side routing
- **ESLint** - Code linting

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the backend directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/notes
# Or use MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/notes
```

## 🚦 Rate Limiting

The API implements rate limiting to prevent abuse:
- **Window:** 1 minute
- **Limit:** 10 requests per IP
- **Response:** "STOP" message when limit exceeded

## 📝 Error Handling

All endpoints include comprehensive error handling:
- **404** - Resource not found
- **500** - Internal server error
- **429** - Too many requests (rate limit)

## 💭 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/SwagBoy3000/Note_MERN/issues) if you want to contribute.

## 📖 Future Enhancements

- [ ] User authentication and authorization
- [ ] Note categories and tags
- [ ] Search functionality
- [ ] Rich text editor
- [ ] Dark mode
- [ ] Export notes (PDF, Markdown)
- [ ] Collaborative notes

## 📄 License

This project is open source and available for educational purposes.

---

**Built with 💜 using the MERN stack**