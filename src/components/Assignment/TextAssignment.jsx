import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
const TextAssignment = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isClick, setClicked] = useState(false);

  const handleSubmit = () => {
    const temp = [];
    if (input.length > 0) {
      const array = input.split(' ');
      array.forEach((item) => {
        temp.push(maxChar(item));
      });
      setClicked(true);
      setResult(temp.join(''));
    } else {
      setClicked(true);
      setResult('Please enter a valid string');
    }
  };
  const maxChar = (str) => {
    const myStr = str.toLowerCase();
    const charMap = {};
    let max = 0;
    let maxChar = '';
    for (const char of myStr) {
      if (!charMap[char]) {
        charMap[char] = 1;
      } else {
        charMap[char]++;
      }
    }

    for (const char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }

    return maxChar;
  };

  // const getMax = (str) => {
  //   let max = 0;
  //   let maxChar = '';
  //   str.split('').forEach((char) => {
  //     if (str.split(char).length > max) {
  //       max = str.split(char).length;
  //       maxChar = char;
  //     }
  //   });
  //   return maxChar;
  // };
  return (
    <div className="m-2 d-flex justify-content-center flex-column align-items-center">
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={10}
        placeholder="Enter Text Here"
        variant="outlined"
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        color="primary"
        variant="contained"
        className="m-2"
        onClick={handleSubmit}
      >
        Submit
      </Button>

      {isClick && (
        <div>
          <h2>Result</h2>
          <p style={{ backgroundColor: 'yellow', padding: '10px' }}>{result}</p>
        </div>
      )}
    </div>
  );
};

export default TextAssignment;
