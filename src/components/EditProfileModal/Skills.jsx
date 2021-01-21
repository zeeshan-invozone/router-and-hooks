import React, { useState } from 'react';
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

export default function Skills({ show, onClose }) {
  const [isChecked, setIsChecked] = useState([]);
  const classes = useStyles();

  const handleSingleCheck = (e) => {
    const { name } = e.target;
    if (isChecked.includes(name)) {
      setIsChecked(isChecked.filter((checked_name) => checked_name !== name));
      return;
    }
    isChecked.push(name);
    setIsChecked([...isChecked]);
  };
  const handleSubmit = () => {
    localStorage.setItem('skills', isChecked);
    onClose();
  };
  return (
    <Dialog open={show} onClose={onClose} aria-labelledby="responsive-dialog-title">
      <DialogContent>
        <div className="text-center">
          <h5 className="dark-grey-text mb-4">
            <strong>Skills</strong>
          </h5>
        </div>
        <div>
          {skillData.map((skill, index) => (
            <div key={index} className="d-flex justify-content-between">
              {skill.name}
              <span>
                <input
                  type="checkbox"
                  name={skill.name}
                  checked={isChecked.includes(skill.name)}
                  onChange={handleSingleCheck}
                />
              </span>
            </div>
          ))}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
