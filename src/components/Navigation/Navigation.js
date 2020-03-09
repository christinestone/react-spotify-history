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
    opacity: 0.4,
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
      width: '100%',
      height: '10%'
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
  const links = [
      {
          key: 'top-tracks',
          to: '/top-tracks',
          icon: <FavoriteIcon />,
          text: 'Top Tracks'
      },
      {
          key: 'recently-played',
          to: '/recently-played',
          icon: <ClockIcon />,
          text: 'Recently Played'
      },
      {
          key: 'top-artists',
          to: '/top-artists',
          icon: <StarIcon />,
          text: 'Top Artists'
      }
  ];
  const drawer = (
    <div>
        <Hidden xsDown implementation="css">
            <Avatar
              src="https://image.shutterstock.com/mosaic_250/706162/671021971/stock-photo-the-golden-retriever-wearing-headphones-listening-to-music-671021971.jpg"
              className={classes.large}
            />
        </Hidden>
        <List className={classes.list}>
            { links.map(link =>
                (
                <ListItem button key={link.key}>
                    <NavLink to={link.to} className={classes.listItem} activeStyle={{opacity: 1}}>
                        <ListItemIcon>{link.icon}</ListItemIcon>
                        <Hidden xsDown implementation="css">
                            <ListItemText primary={link.text} />
                        </Hidden>
                    </NavLink>
                </ListItem>
                ))
            }
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
