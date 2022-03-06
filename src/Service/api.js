import axios from 'axios';
const url = 'http://localhost:3003/users';
export const getUsers = async id => {
  id = id || '';
  return await axios.get(`${url}/${id}`);
};

export const addUser = async user => {
  return await axios.post(url, user);
};

export const editUser = async (id, user) => {
  return await axios.put(`${url}/${id}`, user);
};

// const headers = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
//   'Access-Control-Max-Age': 2592000, // 30 days
//   /** add other headers as per requirement */
// };
// export const getUsers = async () => {
//   return await axios
//     .get(url, { headers })
//     .then(response => {
//       console.log('Success ========>', response);
//     })
//     .catch(error => {
//       console.log('Error ========>', error);
//     });
// };

// await axios.post(
//     'http://localhost:3001/login',
//     {
//         user_name: this.state.user_name,
//         password: this.state.password,
//     },
//     {headers}
//     ).then(response => {
//         console.log("Success ========>", response);
//     })
//     .catch(error => {
//         console.log("Error ========>", error);
//     }
// )

// axios({
//     method: 'get',
//     url: `https://api.someurl.com/subject/v2/resource/somevalue`,
//     withCredentials: false,
//     params: {
//       access_token: SECRET_TOKEN,
//     },
//   });
