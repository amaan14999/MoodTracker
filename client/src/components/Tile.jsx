import React, { useState } from "react";

const Tile = ({ index }) => {
  const [color, setColor] = useState("#C9DBB2");
  const [hovered, setHovered] = useState(false);

  const handleTileClick = () => {
    const selectedMood = prompt("Select your mood:");

    // Define the color mappings for different moods
    const moodColors = {
      happy: "#36a2eb",
      good: "#4bc0c0",
      alright: "#ffcd56",
      lazy: "#ff9f40",
      bad: "#ff6384",
      // Add more moods and their respective colors here
    };

    // Check if the selected mood exists in the moodColors object
    if (selectedMood in moodColors) {
      setColor(moodColors[selectedMood]);
    } else {
      setColor("#C9DBB2"); // Set default color if mood is not recognized
    }
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const getDate = (index) => {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const dayOfYear = index + 1;
    const tileDate = new Date(today.getFullYear(), 0, dayOfYear).toDateString();
    return tileDate;
  };

  return (
    <div
      className="tile"
      style={{ backgroundColor: color }}
      onClick={handleTileClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hovered && <span className="date">{getDate(index)}</span>}
    </div>
  );
};

export default Tile;
