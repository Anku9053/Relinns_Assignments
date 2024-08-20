const express = require('express');
const app = express();
const port = 3000;

// Import your routes
const postRoutes = require('./post');
const deleteRoute = require('./delete');

// Middleware to parse JSON
app.use(express.json());

// Use the imported routes with relative paths
app.use('http://localhost:3000', postRoutes);
app.use('/api', deleteRoute);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
