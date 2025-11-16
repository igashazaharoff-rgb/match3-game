js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const gameRoutes = require('./routes/game');

const app = express();

app.use(cors());
app.use(express.json());

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/match3', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/game', gameRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
