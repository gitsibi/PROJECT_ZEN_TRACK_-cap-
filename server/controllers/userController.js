const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

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
      
        res.status(200).send({ message: "Login successful", token });
    } catch (error) {
        res.status(500).send({ message: "Internal server error", error: error.message });
    }
};


const setupProfile = async (req, res) => {
  try {
    const { workType, deviceUsed, workHours, breakInterval } = req.body;
    const userId = req.user._id;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        workType,
        deviceUsed,
        workHours,
        breakInterval
      },
      { new: true }
    );

    res.status(200).json({ message: "Profile setup completed", user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Error updating profile" });
  }
};

const getUserProfile = async (req, res) => {
  try {
    // You can customize which fields to return if needed
    res.status(200).json({ user: req.user });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch user profile', error: error.message });
  }
};


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

module.exports = { registerUser, loginUser,setupProfile, getUserProfile, googleLoginUser  };
