import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core';

export default function Education(props) {
  const [matric, setMatric] = useState('');
  const [secondary, setSecondary] = useState('');
  const [hireEdu, setHireEdu] = useState('');
  const [uni, setUni] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      matric,
      secondary,
      hireEdu,
      uni,
    };
    localStorage.setItem('education', JSON.stringify(info));
    props.onClose();
  };
  return (
    <>
      <Dialog
        open={props.show}
        onClose={props.onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <div className="text-center">
            <h5 className="dark-grey-text mb-4">
              <strong>General Info</strong>
            </h5>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-3"
              name="matric"
              placeholder="matric"
              onChange={(e) => setMatric(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-3"
              name="secondary"
              placeholder="secondary"
              onChange={(e) => setSecondary(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-3"
              name="hireEdu"
              placeholder="hireEdu"
              onChange={(e) => setHireEdu(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-3"
              name="uni"
              placeholder="university"
              onChange={(e) => setUni(e.target.value)}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
