import React from 'react';
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core';

const skillData = [
  { id: 0, name: 'php' },
  { id: 1, name: 'css' },
  { id: 2, name: 'html' },
  { id: 3, name: 'javascript' },
  { id: 4, name: 'reactjs' },
  { id: 5, name: 'nodejs' },
  { id: 6, name: 'sass' },
  { id: 7, name: 'postgres' },
  { id: 8, name: 'laravel' },
  { id: 9, name: 'scss' },
];
export default function Skills(props) {
  const handleSubmit = () => {
    console.log('skill click');
    props.onClose();
  };
  return (
    <Dialog
      open={props.show}
      onClose={props.onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent>
        <div className="text-center">
          <h5 className="dark-grey-text mb-4">
            <strong>Skill</strong>
          </h5>
        </div>
        <div>
          {skillData.map((skill, index) => (
            <span key={index}>{skill.name}</span>
          ))}
        </div>
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
  );
}
