import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { addUser, getUsers, editUser } from '../Service/api.js';
import { useNavigate, useParams } from 'react-router-dom';

const useStyle = makeStyles({
  container: {
    width: '50%',
    margin: '5% 0 0 25%',
    '& > *': {
      marginTop: 20,
    },
  },
});

const initialValues = {
  name: '',
  // username: '',
  // phone: '',
  price: '',
};

const EditUser = () => {
  const [user, setUser] = useState(initialValues);
  const { name, price } = user;
  const classes = useStyle();
  const { id } = useParams();

  const loadUserData = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };
  useEffect(() => {
    loadUserData();
  }, []);
  const onValueChange = e => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const history = useNavigate();

  const editUserDetails = async () => {
    await editUser(id, user);
    history('/');
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={e => onValueChange(e)} name="name" value={name} />
      </FormControl>
      {/* <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={e => onValueChange(e)}
          name="username"
          value={username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={e => onValueChange(e)} name="email" value={email} />
      </FormControl> */}
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={e => onValueChange(e)} name="price" value={price} />
      </FormControl>
      <Button
        variant="contained"
        onClick={() => editUserDetails()}
        color="primary"
      >
        Edit user
      </Button>
    </FormGroup>
  );
};

export default EditUser;
