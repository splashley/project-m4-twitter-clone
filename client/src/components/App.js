// Libraries
import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

// Components
import Sidebar from "./Sidebar";
import Homefeed from "./Homefeed";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import TweetDetails from "./TweetDetails";
import Profile from "./Profile";

// Styles
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  const { currentUser, status } = useContext(CurrentUserContext);

  return (
    <Div>
      <GlobalStyles />
      <Router>
        <Sidebar />
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
    </Div>
  );
};

// Styles
const Div = styled.div`
  display: flex;
  margin: 0 10% 0 10%;
`;

export default App;
