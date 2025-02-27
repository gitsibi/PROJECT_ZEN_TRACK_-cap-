// const Session = require("../models/sessionModel");
// const User = require("../models/userModels");

// // Get all sessions from the database
// const getAllSessionsController = async (req, res) => {
//   try {
//     const sessions = await Session.find(); 

//     return res
//       .status(200)
//       .send({ message: "Session data fetched successfully", data: sessions });
//   } catch (error) {
//     return res
//       .status(500)
//       .send({ message: "Internal server error", success: false });
//   }
// };

// // Get a single session by ID from the database
// const getSingleSessionController = async (req, res) => {
//   const { id } = req.query; 

//   // Validate if ID is provided and in a valid format
//   if (!id || !mongoose.Types.ObjectId.isValid(id)) {
//     return res
//         .status(400)
//         .send({ message: "Invalid or missing session ID", success: false });
// }

//   try {
//     const session = await Session.findById(id); 

//     if (!session) {
//       return res
//         .status(404)
//         .send({ message: "Session not found", data: null, success: false });
//     }

//     return res
//       .status(200)
//       .send({ message: "Session data fetched successfully", data: session });
//   } catch (error) {
//     return res
//       .status(500)
//       .send({ message: "Internal server error", success: false });
//   }
// };

// const createSession = async (req, res) => {
//   const { user, duration } = req.body;

//   try {
//       // Validate user ID before creating a session
//       const existingUser = await User.findById(user);
//       if (!existingUser) {
//           return res.status(400).send({ message: "Invalid user ID" });
//       }

//       const session = await Session.create({ user, duration });
//       res.status(201).send({ message: "Session created successfully", session });

//   } catch (error) {
//       res.status(500).send({ message: "Internal server error", error: error.message });
//   }
// };

// module.exports = { getAllSessionsController, getSingleSessionController, createSession};

const mongoose = require("mongoose");
const Session = require("../models/sessionModel");
const User = require("../models/userModel");

// Get all sessions from the database
const getAllSessionsController = async (req, res) => {
  try {
    const sessions = await Session.find().populate("user", "name email"); 

    return res.status(200).send({
      message: "Session data fetched successfully",
      data: sessions,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

// Get a single session by ID from the database
const getSingleSessionController = async (req, res) => {
  const { id } = req.query;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Invalid or missing session ID",
      success: false,
    });
  }

  try {
    const session = await Session.findById(id).populate("user", "name email");

    if (!session) {
      return res.status(404).send({
        message: "Session not found",
        data: null,
        success: false,
      });
    }

    return res.status(200).send({
      message: "Session data fetched successfully",
      data: session,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

// Create a new session
const createSession = async (req, res) => {
  const {
    duration,
    sessionType,
    focusLevel,
    taskDescription,
    breaksTaken,
    deviceUsed,
    distractionCount,
    endTime,
  } = req.body;

  try {
    const userId = req.user.id; // Get user ID from the verified JWT token

    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(400).send({ message: "Invalid user ID" });
    }

    const sessionEfficiency =
      duration > 0
        ? Math.max(0, ((duration - (breaksTaken || 0)) / duration) * 100)
        : 0;

    const session = await Session.create({
      user: userId, // Automatically associate session with logged-in user
      duration,
      sessionType,
      focusLevel,
      taskDescription,
      breaksTaken,
      deviceUsed,
      distractionCount,
      endTime,
      sessionEfficiency,
    });

    res.status(201).send({
      message: "Session created successfully",
      session,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = {
  getAllSessionsController,
  getSingleSessionController,
  createSession,
};
