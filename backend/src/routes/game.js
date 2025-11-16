js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

router.get('/progress', auth, async (req, res) => {
  const user = req.user;
  res.json({
    score: user.score,
    level: user.level,
    energy: user.energy,
    achievements: user.achievements,
    quests: user.quests,
    coins: user.coins,
    inventory: user.inventory
  });
});router.post('/progress', auth, async (req, res) => {
  const { score, level, energy, achievements, quests, coins, inventory } = req.body;

  const user = req.user;
  user.score = score || user.score;
  user.level = level || user.level;
  user.energy = energy || user.energy;
  user.achievements = achievements || user.achievements;
  user.quests = quests || user.quests;
  user.coins = coins || user.coins;
  user.inventory = inventory || user.inventory;

  await user.save();

  res.json({ success: true });
});

module.exports = router;
