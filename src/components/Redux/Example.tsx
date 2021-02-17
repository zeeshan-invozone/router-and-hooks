import React, { useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { increment, decrement, getData } from './Actions';
import { Creators } from '../Redux/ReduxSouce/rootActions';
import { Button } from '@material-ui/core';
const Example = (props) => {
  const [posts, setPosts] = useState([]);
  const balance = useSelector((state) => state.balance);
  const data = useSelector((state) => state.getData);
  const disPatch = useDispatch();
  const getDataFromApi = async (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    await disPatch(getData());
  };

  const handleWidthdraw = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    console.log('withdraw');
    disPatch({ type: 'WITHDRAW_TWENTY' });
  };
  return (
    <div className="p-3">
      <div>Balance : {balance}</div>
      <div>
        <Button variant="contained" color="default" onClick={handleWidthdraw}>
          Withdraw
        </Button>
        <Button
          variant="contained"
          color="default"
          onClick={() => disPatch({ type: 'DEPOSIT_CASH', payload: 50 })}
        >
          Deposit
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
