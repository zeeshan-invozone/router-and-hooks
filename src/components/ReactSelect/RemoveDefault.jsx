import React, { useEffect, useRef, useState } from 'react';
import Select from 'react-select';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
export default function RemoveDefault() {
  const selectRef = useRef();
  const handleSubmit = () => {
    const dv1 = selectRef.current.select.props.onChange({
      value: 'chand',
      label: 'chand',
    });
    console.log(dv1);
    console.log('select', selectRef.current.select.props);
  };
  const handleChage = (e) => {
    console.log('target:', e.value);
    // const dv = selectRef.current.select.props.options[1];
  };
  return (
    <div className="mt-3 p-3">
      <Select
        options={options}
        ref={selectRef}
        defaultValue={options[0]}
        placeholder="Select Values"
        onChange={handleChage}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
