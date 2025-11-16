js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  telegramId: { type: String, required: true, unique: true },
  score: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  energy: { type: Number, default: 5 },
  lastEnergyTime: { type: Date, default: Date.now },
  achievements: [{ type: String }],
  quests: [{
    id: String,
    progress: Number,
    completed: Boolean
  }],
  inventory: [{
    id: String,
    type: String
  }],
  coins: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
