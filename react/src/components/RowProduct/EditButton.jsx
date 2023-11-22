import { useState, Fragment } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

EditButton.propTypes = {
  product: PropTypes.object.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default function EditButton({ product, handleUpdate }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [summary, setSummary] = useState(product.summary);
  const [imgUrl, setImgUrl] = useState(product.img_url);

  function resetStates() {
    setName(product.name);
    setPrice(product.price);
    setSummary(product.summary);
  }

  function handleFieldChange(setValue, e) {
    setValue(e.target.value);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetStates();
  };

  return (
    <Fragment>
      <IconButton aria-label="edit" onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Update the product info
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="id"
            label="ID"
            type="id"
            fullWidth
            variant="standard"
            value={product.id}
            disabled
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => handleFieldChange(setName, e)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="lastname"
            label="Price"
            type="lastname"
            fullWidth
            variant="standard"
            value={price}
            onChange={(e) => handleFieldChange(setPrice, e)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Summary"
            type="email"
            fullWidth
            variant="standard"
            value={summary}
            onChange={(e) => handleFieldChange(setSummary, e)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Img Url"
            type="email"
            fullWidth
            variant="standard"
            value={imgUrl}
            onChange={(e) => handleFieldChange(setImgUrl, e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button
            onClick={() => {
              handleClose();
              handleUpdate(product.id, name, price, summary, imgUrl);
            }}
          >
            Editar
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
