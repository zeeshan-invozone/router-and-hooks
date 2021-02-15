import React, { useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { increment, decrement, getData } from './Actions';
import { Button } from '@material-ui/core';
const Example = (props) => {
  const [posts, setPosts] = useState([]);
  const counter = useSelector((state) => state.count);
  const data = useSelector((state) => state.getData);
  const disPatch = useDispatch();
  const getDataFromApi = async (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    await disPatch(getData());
  };
  return (
    <div className="p-3">
      <div>Counter : {counter}</div>
      <div>
        <Button
          variant="contained"
          color="default"
          onClick={() => disPatch(increment())}
        >
          +
        </Button>
        <Button
          variant="contained"
          color="default"
          onClick={() => disPatch(decrement())}
        >
          -
        </Button>
        <div className="pt-2">
          <Button variant="contained" color="default" onClick={getDataFromApi}>
            Fetch Data From Api
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Example;
