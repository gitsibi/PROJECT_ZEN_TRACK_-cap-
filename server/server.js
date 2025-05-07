require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const app = express();
const cors = require('cors');

const connectDB = require('./db/database');

const sessionRoute=require('./routes/sessionRoutes');
const userRoute=require('./routes/userRoutes');

const PORT = process.env.PORT || 5000;
connectDB();

app.use(cors({
    origin: 'http://localhost:5173', // allow requests only from this URL
    credentials: true               // allow sending cookies if needed
  }));
  
  app.use(express.json());
// Session middleware
app.use(
  session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
  })
);
// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/session', sessionRoute);
app.use('/api/user', userRoute);

// Auth routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:5173', 
    failureRedirect: '/auth/failure',
  })
);

app.get('/auth/failure', (req, res) => {
  res.send('Failed to authenticate..');
});


app.get('/', (req, res) => {
    res.send('ZenTrack API is Running Successfully!');
});

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
