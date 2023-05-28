import React from "react";
import Tile from "../Tile";

const Stats = () => {
  const tileCount = 365; // Number of tiles in the grid

  return (
    <div className="grid">
      {Array.from({ length: tileCount }).map((_, index) => (
        <Tile key={index} index={index} />
      ))}
    </div>
  );
};

export default Stats;
