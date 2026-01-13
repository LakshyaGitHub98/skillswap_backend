const express = require('express');
const router = express.Router();

/**
 * LOGIN ROUTE
 * POST /api/login
 */
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  console.log(`Login attempt for user: ${username}`);

  // Dummy auth (replace with DB later)
  if (username === 'user' && password === 'pass') {
    console.log(`User ${username} logged in successfully.`);

    return res.status(200).json({
      success: true,
      data: {
        name: "Test User",
        age: 22,
        gender: "Male"
      }
    });
  }

  console.log(`Login failed for user: ${username}`);
  return res.status(401).json({
    success: false,
    message: "Invalid credentials"
  });
});

module.exports = router;