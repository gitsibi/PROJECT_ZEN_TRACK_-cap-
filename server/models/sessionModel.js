const mongoose = require('mongoose');
const User = require('./userModels'); // Import User model


const sessionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        validate: {
            validator: async function (userId) {
                const user = await User.findById(userId);
                return !!user; // Returns true if user exists, otherwise false
            },
            message: "User does not exist"
        }
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

module.exports = mongoose.model('Session', sessionSchema);
