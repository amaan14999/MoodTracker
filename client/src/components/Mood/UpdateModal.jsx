import React, { useState } from "react";
import { Modal } from "antd";
import { Box, Typography } from "@mui/material";

function UpdateModal() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Modal
        title="himaenshu" // Set the title to current date
        open={open} // Use 'visible' instead of 'open'
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div>
            <p>Himansh</p>
        </div>
      </Modal>
    </React.Fragment>
  );
}

export default UpdateModal;
