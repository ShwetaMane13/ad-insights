import * as React from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import check from "../../assets/check.png";

const style = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 70,
  fontWeight: 500,
  fontSize: "1.8rem",
  bgcolor: "background.paper",
  border: "1px solid #dddddd",
  boxShadow: 26,
  p: 4,
};

const Dialog = (props) => {
  const { open, handleClose } = props;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <img src={check} alt="" style={{ height: "3rem", width: "3rem" }} />
          </div>
          <label>Submitted!</label>
        </Box>
      </Modal>
    </div>
  );
};

export default Dialog;
