const express = require("express");
const { loginUser } = require("../controllers/authController");
const { validateInput } = require("../middlewares/inputValidationMiddleware");
//const ExpressBrute = require("express-brute");
const router = express.Router();

/*// Setup Express Brute with MemoryStore (for dev only)
const store = new ExpressBrute.MemoryStore();
const bruteForce = new ExpressBrute(store, {
  freeRetries: 5, // Allow 5 attempts
  minWait: 5 * 60 * 1000, // 5 minutes lockout after 5 failed attempts
  maxWait: 15 * 60 * 1000, // 15 minutes lockout for repeated failures
  lifetime: 15 * 60, // Count attempts within a 15-minute window
});*/

// Login route
router.post("/login",validateInput, loginUser);

// Login route with Express Brute
//router.post("/login", bruteForce.prevent, validateInput, loginUser);


module.exports = router;
