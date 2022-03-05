import { useEffect } from 'react';
import { getUsers } from '../Service/api';

const AllUsers = () => {
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response);
  };
  return <p>Hi from users all</p>;
};

export default AllUsers;
