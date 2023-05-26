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
  }
  // journal: {
  //   type: String,
  // },
});

const Mood = mongoose.model("Mood", moodSchema);

module.exports = Mood;
