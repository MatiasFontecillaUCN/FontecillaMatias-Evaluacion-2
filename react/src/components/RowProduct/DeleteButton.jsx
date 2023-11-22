import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";

import { useState, Fragment } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

DeleteButton.propTypes = {
  product: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default function DeleteButton({ product, handleDelete }) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <IconButton aria-label="delete" onClick={() => setOpen(true)}>
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ sx: { maxWidth: "30%" } }}
      >
        <DialogTitle id="alert-dialog-title">
          {"¿Estás seguro de que quieres eliminar este producto?"}
        </DialogTitle>
        <DialogActions>
          <Button
            sx={{ bgcolor: "green", color:"white" }}
            onClick={() => setOpen(false)}
          >
            No
          </Button>
          <Button
            sx={{ bgcolor: "red", color:"white" }}
            onClick={() => {
              handleDelete(product.id);
              setOpen(false);
            }}
            autoFocus
          >
            Sí
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
