// index.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const itemRoutes = require('./routes/itemRoutes');
const logger = require('./middlewares/logger');

const app = express();
const port = 3000;

// Connect to the MongoDB database
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define the API routes
app.use('/api/items', itemRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
