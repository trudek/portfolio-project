const express = require('express');
const router = express.Router();
const {
  getPlayers,
  addPlayer,
  updatePlayer,
  deletePlayer,
} = require('../controllers/playerController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getPlayers).post(protect, addPlayer);
router.route('/:id').put(protect, updatePlayer).delete(protect, deletePlayer);

module.exports = router;
