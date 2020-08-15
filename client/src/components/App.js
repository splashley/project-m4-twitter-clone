import React from "react";
import { BrowserRouter as Switch, Router } from "react-router-dom";

// routes

const App = () => {
  return (
    <Router>
      <div>Hello world</div>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/notifications">
          <Notifications />
        </Route>
        <Route path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route path="/tweet/:tweetId">
          <TweetRoute />
        </Route>
        <Route path="/:profileId">
          <ProfileID />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
