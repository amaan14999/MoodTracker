const express = require("express");
const router = express.Router();

require("../db/connectDB");

const Mood = require("../model/moodSchema");

router.post("/mood", async (req, res) => {
  const { mood, note } = req.body;

  if (!mood) {
    return res.status(400).json({ error: "Mood is required" });
  }

  try {
    const createdMood = await Mood.create({ mood, note });
    res.status(201).json({ mood: createdMood, note: note });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/mood", async (req, res) => {
  const { date } = req.query;

  try {
    let moods;

    if (date) {
      moods = await Mood.find({
        date: { $gte: new Date(date), $lt: new Date(date) },
      });
    } else {
      moods = await Mood.find();
    }

    res.status(200).json({ moods: moods });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
