const mongoose = require('mongoose');

// Profile schema for work-related details
const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to User model
    required: true
  },
  workType: {
    type: String,
    enum: ["Student", "Freelancer", "Employee", "Other"],
  },
  workHours: {
    type: Number,
    
  },
  breakInterval: {
    type: Number,
    
  },
  deviceUsed: {
    type: String,
    enum: ["Mobile", "Web", "Laptop"],
  },
});

module.exports = mongoose.model('Profile', profileSchema);
