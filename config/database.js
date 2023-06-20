// config/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/restfull-crud-apis', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
};

module.exports = connectDB;
