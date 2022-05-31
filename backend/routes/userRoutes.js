const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  deleteUser,
  getMe,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(registerUser).delete(protect, deleteUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

module.exports = router;
