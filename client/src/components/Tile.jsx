import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Box, Typography } from "@mui/material";
import Modalweb from "./Mood/Modal";

const Tile = ({ index }) => {
  const [color, setColor] = useState("#C9DBB2");
  const [hovered, setHovered] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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

  const handleTileClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleOk = () => {
    console.log("OK button clicked");
    handleCloseModal();
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
    handleCloseModal();
  };

  return (
    <div
      className="tile"
      style={{ backgroundColor: color }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTileClick}
    >
      {hovered && <span className="date">{getDate(index)}</span>}
      <Modal
        title={getDate(index)}
        visible={modalVisible}
        onOk={handleOk}
        okText="Edit Details"
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Modalweb closeModal={handleCloseModal} key="edit" />,
        ]}
      >
        <Box>
          <Typography variant="h6" component="div">
            dfaf
          </Typography>
          <Typography variant="body1" component="div">
            You said it was {} day
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Tile;
