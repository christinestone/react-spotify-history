import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {
  Avatar,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline
} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import TopArtists from "../TopArtists/TopArtists";
import RecentlyPlayed from '../RecentlyPlayed/RecentlyPlayed';

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
  toolbar: theme.mixins.toolbar,
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

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const ReactRouter = () => {
    return (
      <Fragment>
          <Switch>
              <Route exact path="/recently-played" component={RecentlyPlayed} />
              <Route path="/top-artists" component={TopArtists} />
          </Switch>
      </Fragment>
     )
   };

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
    <div className={classes.root}>
      <Router>
      <CssBaseline />
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ReactRouter/>
      </main>
      </Router>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};

export default ResponsiveDrawer;
