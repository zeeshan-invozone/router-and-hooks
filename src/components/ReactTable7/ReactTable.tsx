import React, { useEffect, useMemo, useState } from 'react';
import UserData from '../../utils/profilesInfo';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import TableContainer from './TableContainer';
import AddProfileForm from '../Assignment/AddProfileForm';
import firebase from '../Firebase/firebase';

const ReactTable = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const fire = firebase.firestore();
  useEffect(() => {
    getAllUsers();
  }, []);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    getAllUsers();
    setOpen(false);
  };

  const getAllUsers = async () => {
    // firebaseConfig
    //   .database()
    //   .ref('User')
    //   .on('value', (snapshot) => {
    //     const obj = snapshot.val();
    //     if (obj) {
    //       const values = Object.keys(obj).map(function (key) {
    //         return obj[key];
    //       });
    //       setUsers(values);
    //     } else {
    //       setUsers('');
    //     }
    //   });
    // const todoRef = firebaseConfig.database().ref('User');
    // todoRef.on('value', (snapshot) => {
    //   const user = snapshot.val();
    //   const userList = [];
    //   for (let id in user) {
    //     userList.push({ id, ...user[id] });
    //   }
    //   setUsers(userList);
    // });
    const user = await fire.collection('users').get();
    const allUsers = [];
    user.forEach((doc) => {
      let userData = doc.data();
      userData['id'] = doc.id;
      console.log('userDate', userData);
      allUsers.push(userData);
    });
    setUsers(allUsers);
  };

  const data = useMemo(() => users, [users]);
  let history = useHistory();
  const handleDelete = async (e, cell) => {
    e.preventDefault();
    const id = cell.row.original.id;

    const res = await fire.collection('users').doc(id).delete();
  };
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
        Header: 'Delete',
        accessor: 'delete',
        // eslint-disable-next-line react/display-name
        Cell: (cell) => (
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleDelete(e, cell)}
          >
            Delete
          </Button>
        ),
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
    <div className="m-5 text-center">
      <Button
        className="m-2"
        color="primary"
        variant="contained"
        onClick={handleOpen}
      >
        Add New User
      </Button>
      {users.length > 0 ? (
        <TableContainer columns={columns} data={data} />
      ) : (
        'User not Found yet Please add new One'
      )}

      {open && <AddProfileForm show={open} onClose={handleClose} />}
    </div>
  );
};

export default ReactTable;
