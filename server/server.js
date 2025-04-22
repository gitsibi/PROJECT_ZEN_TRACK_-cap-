require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const connectDB = require('./db/database');

const sessionRoute=require('./routes/sessionRoutes');
const userRoute=require('./routes/userRoutes');

const PORT = process.env.PORT || 5000;
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/session', sessionRoute);
app.use('/api/user', userRoute);

app.get('/', (req, res) => {
    res.send('ZenTrack API is Running Successfully!');
});

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
