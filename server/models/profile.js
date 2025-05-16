// const mongoose = require('mongoose');

// // Profile schema for work-related details
// const profileSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', // Reference to User model
//     required: true
//   },
//   workType: {
//     type: String,
//     enum: ["Student", "Freelancer", "Employee", "Other"],
//   },
//   workHours: {
//     type: Number,
    
//   },
//   breakInterval: {
//     type: Number,
    
//   },
//   deviceUsed: {
//     type: String,
//     enum: ["Mobile", "Web", "Laptop"],
//   },
// });

// module.exports = mongoose.model('Profile', profileSchema);


const mongoose = require('mongoose');

// Schema for individual break timings
const breakSchema = new mongoose.Schema({
  start: {
    type: String, // use "HH:mm" format as string
    required: true
  },
  end: {
    type: String,
    required: true
  }
}, { _id: false }); // Disable _id for subdocuments

// Profile schema
const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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
    enum: ["Mobile", "Web", "Laptop", "Tab"],
  },
  // New fields for Employee
  workStartTime: {
    type: String, // use "HH:mm" format
  },
  workEndTime: {
    type: String,
  },
  breakTimings: [breakSchema] 
});

module.exports = mongoose.model('Profile', profileSchema);
