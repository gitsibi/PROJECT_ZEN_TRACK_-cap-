const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 6
    },
    profilePic: {
        type: String,
      }
      
});


const User = mongoose.model('User', userSchema);
module.exports = User;


// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, "Name is required"],
//         trim: true
//     },
//     email: {
//         type: String,
//         required: [true, "Email is required"],
//         unique: true,
//         lowercase: true
//     },
//     password: {
//         type: String,
//         required: [true, "Password is required"],
//         minlength: 6
//     },
//     profilePic: {
//         type: String
//     },
//     workType: {
//         type: String,
//         enum: ["Student", "Freelancer", "Employee", "Other"],
       
//     },
//     workHours: {
//         type: Number,
//         default: 8
//     },
//     breakInterval: {
//         type: Number,
//         default: 5
//     },
//     deviceUsed: {
//         type: String,
//         enum: ["Mobile", "Web", "Laptop"],
        
//     }
// });

// module.exports = mongoose.model('User', userSchema);
