import React, { useEffect, useRef, useState } from 'react';
import Select from 'react-select';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
export default function RemoveDefault() {
  const selectRef = useRef({ value: 'strawberry', label: 'Strawberry' });
  // const [input, setInput] = useState(null);
  const [isClick, setClicked] = useState(false);

  const handleSubmit = () => {
    // const dv = selectRef.current.select.props.options[1];
    const dv1 = selectRef.current.props.defaultValue;
    setClicked(true);
    console.log(dv1);
  };
  const handleChage = (e) => {
    console.log('target:', e.value);
  };
  return (
    <div className="mt-3 p-3">
      <Select
        options={options}
        ref={selectRef}
        // defaultValue={selectRef.current}
        defaultValue={isClick ? options[0] : selectRef.current}
        placeholder="Select Values"
        onChange={handleChage}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
