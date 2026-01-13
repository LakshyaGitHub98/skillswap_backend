const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;

// Importing route modules
const authRoutes = require('./routes/authroutes');

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to the SkillSwap Backend!');
});

// Using imported routes
app.use('/api/auth', authRoutes);


// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});   
