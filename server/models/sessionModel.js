const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    duration: {
        type: Number,
        required: [true, "Duration is required"],
        min: [1, "Duration must be a positive number"]
    },
    sessionType: {
        type: String,
        enum: ["Pomodoro", "Deep Work", "Manual"],
        required: true
    },
    focusLevel: {
        type: Number,
        min: 1,
        max: 10,
        default: 5
    },
    taskDescription: {
        type: String,
        trim: true
    },
    breaksTaken: {
        type: Number,
        default: 0,
        min: 0
    },
    deviceUsed: {
        type: String,
        enum: ["Mobile", "Web","Laptop"],
        required: true
    },
    distractionCount: {
        type: Number,
        default: 0,
        min: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
    endTime: {
        type: Date
    },
    sessionEfficiency: {
        type: Number,
        min: 0,
        max: 100
    }
});

module.exports = mongoose.model('Session', sessionSchema);
