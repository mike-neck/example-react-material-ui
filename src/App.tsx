import React, {useState} from 'react';
import './App.css';
import {AppBar, Button, createStyles, IconButton, Menu, MenuItem, Theme, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#d6d6d6",
  },
}));

function App() {
  const classes = useStyles();

  const [mainMenuAnchor, setMainMenuAnchor] = useState<HTMLElement | null>(null);
  const clickMainMenu: (event: React.MouseEvent<HTMLButtonElement>) => void = event => setMainMenuAnchor(event.currentTarget);
  const closeMainMenu = () => setMainMenuAnchor(null);

  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton aria-controls="main-menu" aria-haspopup="true" edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={clickMainMenu}>
              <MenuIcon/>
            </IconButton>
            <Menu id="main-menu" open={Boolean(mainMenuAnchor)} keepMounted anchorEl={mainMenuAnchor} onClose={closeMainMenu}>
              <MenuItem onClick={closeMainMenu}>Foo</MenuItem>
              <MenuItem onClick={closeMainMenu}>Bar</MenuItem>
            </Menu>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
  );
}

export default App;
