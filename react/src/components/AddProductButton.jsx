import PropTypes from "prop-types";
import { Button, Box } from "@mui/material";
import { useState, Fragment } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

AddProductButton.propTypes = {
  handleCreate: PropTypes.func.isRequired,
};

export default function AddProductButton({handleCreate}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [summary, setSummary] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  function resetStates() {
    setName("");
    setPrice("");
    setSummary("");
  }

  function handleFieldChange(setValue, e) {
    setValue(e.target.value);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Box display="flex" justifyContent="flex-end" onClick={handleClickOpen}>
        <Button variant="contained" sx={{ bgcolor: "#20905D" }}>
          Register Product
        </Button>
      </Box>
      <Box component="form">
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Register Product</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Create a new product
            </DialogContentText>
            <TextField
              autoFocus
              required
              fullWidth
              margin="normal"
              variant="standard"
              id="name"
              label="Name"
              type="name"
              value={name}
              onChange={(e) => handleFieldChange(setName, e)}
            />
            <TextField
              autoFocus
              required
              fullWidth
              margin="normal"
              variant="standard"
              id="lastname"
              label="Summary"
              type="lastname"
              value={summary}
              onChange={(e) => handleFieldChange(setSummary, e)}
            />
            <TextField
              autoFocus
              required
              fullWidth
              margin="normal"
              variant="standard"
              id="number"
              label="Price"
              type="number"
              value={price}
              onChange={(e) => handleFieldChange(setPrice, e)}
              inputProps={{ min: "0", step: "1" }}
            />
            <TextField
              autoFocus
              required
              fullWidth
              margin="normal"
              variant="standard"
              id="number"
              label="Image URL"
              value={imgUrl}
              onChange={(e) => handleFieldChange(setImgUrl, e)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={() => {
                handleClose();
                handleCreate(name, price, summary,imgUrl);
                resetStates();
              }}
            >
              Register
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Fragment>
  );
}
