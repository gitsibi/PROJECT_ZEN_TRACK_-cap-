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
    date: {
        type: Date,
        default: Date.now
    }
});

const Session = mongoose.model('Session', sessionSchema);
module.exports = Session;
