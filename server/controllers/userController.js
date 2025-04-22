const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
  
      const user = await User.create({ name, email, password });
  
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
            return res.status(400).send({ message: "Invalid email or password",
              hash:user.password
             });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.status(200).send({ message: "Login successful", token });
    } catch (error) {
        res.status(500).send({ message: "Internal server error", error: error.message });
    }
};

module.exports = { registerUser, loginUser };
