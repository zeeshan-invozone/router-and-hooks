import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core';

export default function GeneralInfo(props) {
  const [fname, setfName] = useState('');
  const [designation, setDesignation] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const gf = {
      fname,
      designation,
      age,
      address,
      company,
    };
    localStorage.setItem('generalinfo', JSON.stringify(gf));
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
              name="fname"
              placeholder="FirstName"
              onChange={(e) => setfName(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-3"
              name="designation"
              placeholder="Designation"
              onChange={(e) => setDesignation(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-3"
              name="age"
              placeholder="age"
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-3"
              name="address"
              placeholder="address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-3"
              name="company"
              placeholder="Company"
              onChange={(e) => setCompany(e.target.value)}
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
