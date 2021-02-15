import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { increment, decrement, getData } from './Actions';
const Example = (props) => {
  const counter = useSelector((state) => state.count);
  const disPatch = useDispatch();
  return (
    <div>
      Counter : {counter}
      <div>
        <button onClick={() => disPatch(increment())}>Add</button>
        <button onClick={() => disPatch(decrement())}>Subtract</button>

        <button onClick={() => disPatch(getData())}>Get Data</button>
      </div>
    </div>
  );
};

export default Example;
