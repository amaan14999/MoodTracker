const mongoose = require("mongoose");

const moodSchema = new mongoose.Schema({
  mood: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  note: {
    type: String,
  },
});

// Define the 'Mood' model based on the 'moodSchema'
const Mood = mongoose.model("Mood", moodSchema);

module.exports = Mood;
