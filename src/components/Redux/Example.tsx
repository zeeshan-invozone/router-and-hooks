import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { increment, decrement } from './Actions';
const Example = (props) => {
  const counter = useSelector((state) => state.counter);
  const disPatch = useDispatch();
  console.log('props', props.counter);
  return (
    <div>
      Counter : {counter}
      <div>
        <button onClick={() => disPatch(increment())}>Add</button>
        <button onClick={() => disPatch(decrement())}>Subtract</button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
export default connect(mapStateToProps)(Example);
