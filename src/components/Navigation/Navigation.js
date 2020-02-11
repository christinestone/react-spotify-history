import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import React from "react";

import TopArtists from "../TopArtists/TopArtists";
import RecentlyPlayed from '../RecentlyPlayed/RecentlyPlayed';


const Navigation = () => (
    <Router>
        <div>
            <nav>
              <NavLink to="/top-artists">
                  <span>Top Artists</span><br/>
                  <span></span>
              </NavLink>

              <NavLink to="/top-tracks">
                  <span>Top Tracks</span><br/>
              </NavLink>

              <NavLink to="/recently-played">
                  <span>Recently Played</span>
                  <span></span>
              </NavLink>

            </nav>
        <Switch>
          <Route path="/top-artists">
            <TopArtists />
          </Route>
          <Route path="/recently-played">
            <RecentlyPlayed />
          </Route>
        </Switch>
      </div>
    </Router>
);

export default Navigation;
