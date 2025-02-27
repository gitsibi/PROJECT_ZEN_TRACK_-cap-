const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    user: {
        type: String,
        required: [true, "User is required"],
        trim: true,
        minlength: [3, "User name must be at least 3 characters long"]
    },
    duration: {
        type: Number,
        required: [true, "Duration is required"],
        min: [0, "Duration must be a positive number"]
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Session = mongoose.model('Session', sessionSchema);
module.exports = Session;
