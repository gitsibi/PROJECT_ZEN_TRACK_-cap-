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

module.exports = { getAllSessionsController, getSingleSessionController };
