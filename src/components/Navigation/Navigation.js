import React from 'react';
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
    display: 'flex'
  },
  list: {
    [theme.breakpoints.down('xs')]: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 0,
        alignItems: 'baseline'
    }
  },
  listItem: {
    [theme.breakpoints.down('xs')]: {
        marginTop: 0
    }
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 180,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    backgroundColor: '#66b2b2',

    [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        alignItems: 'center',
        paddingTop: '8%',
    },
    [theme.breakpoints.down('xs')]: {
      bottom: 0,
      display: 'flex',
      position: 'fixed',
      width: '100%',
      height: '8%'
    }
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
        <Hidden xsDown implementation="css">
            <Avatar
              src="https://image.shutterstock.com/mosaic_250/706162/671021971/stock-photo-the-golden-retriever-wearing-headphones-listening-to-music-671021971.jpg"
              className={classes.large}
            />
        </Hidden>
        <List className={classes.list}>
          <ListItem button key="top-tracks">
            <NavLink to="/top-tracks" className={classes.listItem}>
              <ListItemIcon><FavoriteIcon /></ListItemIcon>
              <ListItemText primary="Top Tracks" />
            </NavLink>
            </ListItem>
          <ListItem button key="recently-played">
            <NavLink to="/recently-played" className={classes.listItem}>
              <ListItemIcon><ClockIcon /></ListItemIcon>
              <ListItemText primary="Recently Played" />
            </NavLink>
            </ListItem>
          <ListItem button key="top-artists">
            <NavLink to="/top-artists" className={classes.listItem}>
              <ListItemIcon><StarIcon /></ListItemIcon>
              <ListItemText primary="Favourite Artists" />
            </NavLink>
            </ListItem>
        </List>
    </div>
  );

  return (
    <nav className={classes.drawer}>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
    </nav>
  );
}

export default ResponsiveDrawer;
