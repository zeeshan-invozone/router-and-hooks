import React, { useEffect, useMemo, useState } from 'react';
import Axios from 'axios';
import { useTable } from 'react-table';
import userData from '../../utils/profilesInfo';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import TableContainer from './TableContainer';
const Style = styled.div`
  width: 100%;
  table {
    width: 100%;
    border-spacing: 0;
  }

  th,
  td {
    border: 1px solid;
    margin: 0;
    padding: 0.5rem;
  }
`;

export default function ReactTable() {
  const [data1, setData] = useState([]);
  //   useEffect(async () => {
  //     const response = await Axios.get('https://randomuser.me/api/?results=100');
  //     console.log('respnse');
  //     setData(response.data.results);
  //   }, []);
  const data = useMemo(() => userData, []);
  let history = useHistory();
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Address',
        accessor: 'address', // accessor is the "key" in the data
      },
      {
        Header: 'Designation',
        accessor: 'designation',
      },
      {
        Header: 'Company',
        accessor: 'company',
      },
      {
        Header: 'Edit',
        accessor: 'edit',
        // eslint-disable-next-line react/display-name
        Cell: (cell) => (
          <Button
            variant="contained"
            color="primary"
            value={cell.accessor}
            onClick={() =>
              history.push('/edit', {
                data: cell.row.original,
              })
            }
          >
            Edit
          </Button>
        ),
      },
    ],
    []
  );

  return (
    <>
      <TableContainer columns={columns} data={data} />
    </>
  );
}
