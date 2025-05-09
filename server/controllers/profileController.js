const Profile = require('../models/profile');
const User = require('../models/userModel');

// Create Profile Controller
const createProfile = async (req, res) => {
    try {
        const { userId, workType, deviceUsed, workHours, breakInterval } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const newProfile = new Profile({
            userId,
            workType,
            deviceUsed,
            workHours,
            breakInterval
        });

        await newProfile.save();

        return res.status(201).json({ message: "Profile created successfully", profile: newProfile });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error creating profile", error });
    }
};

const updateProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        const { workType, deviceUsed, workHours, breakInterval } = req.body;

        const profile = await Profile.findOne({ userId });
        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }

        profile.workType = workType || profile.workType;
        profile.deviceUsed = deviceUsed || profile.deviceUsed;
        profile.workHours = workHours || profile.workHours;
        profile.breakInterval = breakInterval || profile.breakInterval;

        await profile.save();

        return res.status(200).json({ message: "Profile updated successfully", profile });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error updating profile", error });
    }
};

// Get Profile Controller
const getProfile = async (req, res) => {
    try {
        const userId = req.params.userId;
;

        const profile = await Profile.findOne({ userId });
        console.log("Profile data",profile)
        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }

        return res.status(200).json({ profile });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error fetching profile", error });
    }
};





module.exports = { createProfile, updateProfile, getProfile };
