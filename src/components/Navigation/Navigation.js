import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { NavLink } from "react-router-dom";
import {
  Avatar,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

const drawerWidth = 180;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    // width: 500,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 180,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  // toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14)
  }
}));

function ResponsiveDrawer() {
  const classes = useStyles();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
        <Avatar
          src="https://image.shutterstock.com/mosaic_250/706162/671021971/stock-photo-the-golden-retriever-wearing-headphones-listening-to-music-671021971.jpg"
          className={classes.large}
        />
        <List>
          <ListItem button key="top-tracks">
            <NavLink to="/top-tracks">
              <ListItemIcon><FavoriteIcon /></ListItemIcon>
              <ListItemText primary="Top Tracks" />
            </NavLink>
            </ListItem>
          <ListItem button key="recently-played">
            <NavLink to="/recently-played">
              <ListItemIcon><RestoreIcon /></ListItemIcon>
              <ListItemText primary="Recently Played" />
            </NavLink>
            </ListItem>
          <ListItem button key="top-artists">
            <NavLink to="/top-artists">
              <ListItemIcon><FavoriteIcon /></ListItemIcon>
              <ListItemText primary="Favourite Artists" />
            </NavLink>
            </ListItem>
        </List>
    </div>
  );

  return (
    <nav className={classes.drawer}>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default ResponsiveDrawer;
