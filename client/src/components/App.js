// Libraries
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
import AppStyles from "./App";

const App = () => {
  return (
    <div className="App" style={{ display: "flex" }}>
      <GlobalStyles />
      <Router>
        <Sidebar></Sidebar>
        <Switch>
          <Route exact path="/">
            <Homefeed />
          </Route>
          <Route exact path="/notifications">
            <Notifications />
          </Route>
          <Route exact path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route exact path="/tweet/:tweetId">
            <TweetDetails />
          </Route>
          <Route exact path="/:profileId">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
