const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'], 
    minlength: [2, 'Name should be at least 2 characters long']  
  },
  email: {
    type: String,
    required: [true, 'Email is required'],  
    minlength: [5, 'Email should be at least 5 characters long'],  
    match: [/.+@.+\..+/, 'Email must be a valid email address']  
  },
  password: {
    type: String,
    required: [true, 'Password is required'], 
    minlength: [10, 'Password should be at least 10 characters long']  
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  userId: { type: String, unique: true },
});
const User = mongoose.model('User', userSchema);

module.exports = User;
