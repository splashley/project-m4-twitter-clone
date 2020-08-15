// Libraries
import React from "react";
import { BrowserRouter as Link, Switch, Route, Router } from "react-router-dom";
// Hooks
// Components
import SideBar from "./Sidebar";
import Homefeed from "./Homefeed";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import TweetDetails from "./TweetDetails";
import Profile from "./Profile";
// Styles

const App = () => {
  return (
    <Router>
      <div>Hello world</div>
      <Switch>
        <Route path="/">
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
