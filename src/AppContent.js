import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Navigation  from './components/Navigation/Navigation';
import { makeStyles } from '@material-ui/core/styles';

import {
  CssBaseline
} from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import TopArtists from "./components/TopArtists/TopArtists";
import RecentlyPlayed from './components/RecentlyPlayed/RecentlyPlayed';
import TopTracks from './components/TopTracks/TopTracks';

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
    [theme.breakpoints.down('sm')]: {
      marginBottom: '10%'
    },
  },
  large: {
    width: theme.spacing(14),
    height: theme.spacing(14)
  }
}));

function ResponsiveDrawer(props) {
  const classes = useStyles();

  const ReactRouter = () => {
    return (
      <Fragment>
          <Switch>
              <Redirect exact from="/" to="/recently-played" />
              <Route path="/recently-played" component={RecentlyPlayed} />
              <Route path="/top-artists" component={TopArtists} />
              <Route path="/top-tracks" component={TopTracks} />
          </Switch>
      </Fragment>
     )
   };

  return (
    <div className={classes.root}>
      <Router>
      <CssBaseline />
      <Navigation/>

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
