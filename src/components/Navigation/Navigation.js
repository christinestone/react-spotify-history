import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClockIcon from '@material-ui/icons/QueryBuilderOutlined';
import FavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined';
import StarIcon from '@material-ui/icons/StarBorderOutlined';
import { NavLink } from "react-router-dom";
import './index.css';
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
  drawerPaper: {
    width: drawerWidth,
    alignItems: 'center',
    paddingTop: '8%',
    backgroundColor: '#66b2b2'
  },
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    marginLeft: '12%'
  }
}));

function ResponsiveDrawer() {
  const classes = useStyles();

  const drawer = (
    <div>
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
              <ListItemIcon><ClockIcon /></ListItemIcon>
              <ListItemText primary="Recently Played" />
            </NavLink>
            </ListItem>
          <ListItem button key="top-artists">
            <NavLink to="/top-artists">
              <ListItemIcon><StarIcon /></ListItemIcon>
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
