import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import Types from '../Redux/ReduxSouce/Types';
const Example = (props) => {
  const disPatch = useDispatch();
  const getDataFromApi = async (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
  };

  const handleWidthdraw = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    disPatch({ type: Types.LOGIN_REQUEST, payload: 'hi how are you' });
  };
  return (
    <div className="p-3">
      <div>Balance</div>
      <div>
        <Button variant="contained" color="default" onClick={handleWidthdraw}>
          Submit
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
