// Libraries
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Hooks

// Components
import Sidebar from "./Sidebar";
import Homefeed from "./Homefeed";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import TweetDetails from "./TweetDetails";
import Profile from "./Profile";

// Styles
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Sidebar></Sidebar>
      <Switch>
        <Route exact path="/">
          <Homefeed />
        </Route>
        <Route path="/notifications">
          <Notifications />
        </Route>
        <Route path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route path="/tweet/:tweetId">
          <TweetDetails />
        </Route>
        <Route path="/:profileId">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
