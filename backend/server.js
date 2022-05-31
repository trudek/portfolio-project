const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware.js');
const port = process.env.PORT || 5000;

const app = express();

//connect Mongo DB
connectDB();
app.listen(port, () => console.log(`Server started - port ${port}`.brightBlue));

//read POST body section
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Express Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/players', require('./routes/playerRoutes'));

//Error handler
app.use(errorHandler);
