const Session = require('../models/sessionModel');

// Get all sessions from the database
const getAllSessionsController = async (req, res) => {
  try {
    const sessions = await Session.find(); 

    return res
      .status(200)
      .send({ message: "Session data fetched successfully", data: sessions });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Internal server error", success: false });
  }
};

// Get a single session by ID from the database
const getSingleSessionController = async (req, res) => {
  const { id } = req.query; 

  // Validate if ID is provided and in a valid format
  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return res
        .status(400)
        .send({ message: "Invalid or missing session ID", success: false });
}

  try {
    const session = await Session.findById(id); 

    if (!session) {
      return res
        .status(404)
        .send({ message: "Session not found", data: null, success: false });
    }

    return res
      .status(200)
      .send({ message: "Session data fetched successfully", data: session });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Internal server error", success: false });
  }
};

const createSession = async (req, res) => {
  const { user, duration } = req.body;
  try {
      if (!user || !duration) {
          return res.status(400).send({ message: "User and duration are required" });
      }

      const session = await Session.create({ user, duration });
      res.status(201).send({ message: "Session created successfully", session });
  } catch (error) {
      res.status(500).send({ message: "Internal server error", error: error.message });
  }
};

module.exports = { getAllSessionsController, getSingleSessionController, createSession};
