import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './sorting.css';
const options = [
  { label: 'zeeshan', value: '1' },
  { label: 'akram', value: '2' },
  { label: 'amir', value: '3' },
  { label: 'rizwan', value: '4' },
  { label: 'naeem', value: '5' },
  { label: 'the naeem', value: '6' },
  { label: 'The Ahmed', value: '7' },
  { label: 'Ali Ahmed', value: '8' },
];
const Sorting = () => {
  // removing space from string
  //   const regex = /\s/g;
  const [sort, setSort] = useState([]);

  const arrarySort = (opt) => {
    const newOptions = opt.map((item) => {
      const result = item.label.trim().replace(/the/gi, '');
      const newResult = result.trim().replace(/\s/g, '_');
      const obj = { label: newResult, value: item.value };
      return obj;
    });
    const byName = newOptions.slice(0);
    byName.sort((a, b) => {
      const x = a.label.toLowerCase();
      const y = b.label.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    setSort(byName);
  };
  useEffect(() => {
    arrarySort(options);
  }, []);

  const handleChange = (e) => {
    const current = e.target.id;
    console.log(current);
  };
  return (
    <div>
      <Select options={sort} onChange={handleChange} />
    </div>
  );
};

export default Sorting;
