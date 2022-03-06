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
import { addUser } from '../Service/api.js';
import { useNavigate } from 'react-router-dom';

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
  username: '',
  phone: '',
  email: '',
};

const AddUser = () => {
  const [user, setUser] = useState(initialValues);
  const { name, username, email, phone } = user;
  const classes = useStyle();
  const onValueChange = e => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const history = useNavigate();

  const addUserDetails = async () => {
    await addUser(user);
    history('/');
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={e => onValueChange(e)} name="name" value={name} />
      </FormControl>
      <FormControl>
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
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={e => onValueChange(e)} name="phone" value={phone} />
      </FormControl>
      <Button
        variant="contained"
        onClick={() => addUserDetails()}
        color="primary"
      >
        Add user
      </Button>
    </FormGroup>
  );
};

export default AddUser;
