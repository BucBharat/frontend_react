import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  Button,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
  table: {
    width: '90%',
    margin: '50px 0 0 50px',
  },
  thead: {
    '& > *': {
      background: '#000000',
      color: '#ffffff',
      fontSize: 20,
    },
  },
  row: {
    '& > *': {
      fontSize: 20,
    },
  },
});
const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyle();
  const deleteUserData = async id => {
    await deleteUser(id);
    getAllUsers();
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
  };
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          {/* <TableCell>Username</TableCell> */}
          {/* <TableCell>Email</TableCell> */}
          <TableCell>Price</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map(user => (
          <TableRow className={classes.row}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            {/* <TableCell>{user.username}</TableCell> */}
            <TableCell>{user.price}</TableCell>
            {/* <TableCell>{user.phone}</TableCell> */}
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: 10 }}
                to={`/edit/${user._id}`}
                component={Link}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteUserData(user._id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllUsers;
