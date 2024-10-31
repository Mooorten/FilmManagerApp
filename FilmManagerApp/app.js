require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const filmRoutes = require('./routes/filmRoutes');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Use 'PORT' variable
const dbConnectionString = process.env.DB_CONNECTION_STRING; // Use the correct variable name

// MongoDB connection
mongoose.connect(dbConnectionString, { connectTimeoutMS: 10000 })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Set EJS as view engine
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', filmRoutes);

// Start the server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
