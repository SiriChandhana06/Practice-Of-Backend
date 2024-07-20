const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./Config/DB');
const formRoutes = require('./Routes/FormRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use(formRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
