const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const Profile = require('../models/profile');

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      if (!name || !email || !password) {
        return res.status(400).send({ message: "All fields are required" });
      }
  
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).send({ message: "User already exists" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10); 
      const user = await User.create({ name, email, password: hashedPassword });
      
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

      res.cookie('token', token, {
        httpOnly: true,      
        secure: false,       
        sameSite: 'lax',       
        maxAge: 24 * 60 * 60 * 1000
    });
      res.status(201).send({ message: "User registered successfully", user });
    } catch (error) {
      res.status(500).send({ message: "Internal server error", error: error.message });
    }
  };
  

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.cookie('token', token, {
          httpOnly: true,      
          secure: false,       
          sameSite: 'lax',       
          maxAge: 24 * 60 * 60 * 1000
      });
      
        res.status(200).send({ message: "Login successful", token, user });
    } catch (error) {
        res.status(500).send({ message: "Internal server error", error: error.message });
    }
};


// Check if user has a profile
const checkUserProfile = async (req, res) => {
  const { userId } = req.body;  // UserId sent from frontend

  try {
    // Check if user exists in the User model
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if profile exists for that user in the Profile model
    const profile = await Profile.findOne({ userId: userId });
    
    // If profile exists, send a success response
    if (profile) {
      return res.status(200).json({ profileComplete: true });
    } else {
      // If profile does not exist, prompt to complete the profile
      return res.status(200).json({ profileComplete: false });
    }

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { checkUserProfile };



const googleLoginUser = async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    const { email, name, sub: googleId,picture } = payload;

    let user = await User.findOne({ email });

    if (!user) {
      // Create a new user if not exists
      user = await User.create({
        name,
        email,
        googleId, // store googleId for future reference
        profilePic:picture,
        password: ''// or set to null if password not used
      });
    }
    
      // ✅ Update profilePic if changed
      if (user.profilePic !== picture) {
        user.profilePic = picture;
        await user.save();
      }
    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie('token', jwtToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000
    });

    res.status(200).json({
      message: "Google login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profilePic: user.profilePic, // ✅ return to frontend
      },
    });
    } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Google login failed", error: error.message });
  }
};

module.exports = { registerUser, loginUser,checkUserProfile, googleLoginUser  };
