// import logo from './logo.svg';
import NavBar from './components/NavBar';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EditUser from './components/EditUser';

function App() {
  return (
    // <div>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact={true} path="/" element={<AllUsers />}>
          {' '}
        </Route>
        <Route exact={true} path="/add" element={<AddUser />}>
          {' '}
        </Route>
        <Route exact path="/edit/:id" element={<EditUser />}>
          {' '}
        </Route>
        <Route path="*" element={<NotFound />}>
          {' '}
        </Route>
      </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;
