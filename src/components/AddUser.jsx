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
  // username: '',
  // phone: '',
  price: '',
};

const AddUser = () => {
  const [user, setUser] = useState(initialValues);
  const { name, price } = user;
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
      <Typography variant="h4">Add Item</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={e => onValueChange(e)} name="name" value={name} />
      </FormControl>
      <FormControl>
        <InputLabel>Price</InputLabel>
        <Input onChange={e => onValueChange(e)} name="price" value={price} />
      </FormControl>
      <Button
        variant="contained"
        onClick={() => addUserDetails()}
        color="primary"
      >
        Add item
      </Button>
    </FormGroup>
  );
};

export default AddUser;
