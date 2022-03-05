import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  header: {
    background: '#111111',
  },
});
const NavBar = () => {
  const classes = useStyle();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <Typography>All Users</Typography>
        <Typography>Add Users</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
