import React from 'react';
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from '@material-ui/core';

export default function AddProfileForm({ onClose, show }) {
  return (
    <div>
      <Dialog
        open={show}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <div className="text-center">
            <h5 className="dark-grey-text mb-4">
              <strong>New Profile</strong>
            </h5>
          </div>
          <div>
            <form noValidate autoComplete="off">
              <TextField
                id="standard-secondary"
                label="Standard secondary"
                color="secondary"
              />
              <TextField
                id="filled-secondary"
                label="Filled secondary"
                variant="filled"
                color="secondary"
              />
              <TextField
                id="outlined-secondary"
                label="Outlined secondary"
                variant="outlined"
                color="secondary"
              />
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="primary">Cancel</Button>
          <Button color="primary" onClick={onClose}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
