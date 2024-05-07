const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/signup", authController.register);
router.post("/login", authController.login);

module.exports = router;

// Protect Routes with Auth Middleware
//For routes that require authentication, use the authenticate middleware.
// const express = require('express');
// const router = express.Router();
// const authMiddleware = require('../middleware/auth');

// router.get('/', authMiddleware, (req, res) => {
//   // Route logic
// });

// module.exports = router;
