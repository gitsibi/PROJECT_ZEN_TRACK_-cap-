require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.port || 5000;
connectDB();

//middleware
app.use(cors());
app.use(express.json());

app.use('/api/sessions', require('./routes/sessionRoutes'));

app.get('/', (req, res) => {
    res.send('ZenTrack API is Running Successfully!');
});

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
