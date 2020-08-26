// Libraries
import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Sidebar from "./components/Sidebar";
import Homefeed from "./components/Homefeed";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import TweetDetails from "./components/TweetDetails";
import Profile from "./components/Profile";
import { CurrentUserContext } from "./components/CurrentUserContext";
import Error from "./components/Error";

// Styles
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";

const App = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <MainApp>
      <GlobalStyles />
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Homefeed currentUser={currentUser} />
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
          <Route exact path="/error">
            <Error />
          </Route>
          <Route exact path="/:profileId">
            <Profile currentUser={currentUser} />
          </Route>
        </Switch>
      </Router>
    </MainApp>
  );
};

// Styles
const MainApp = styled.div`
  display: flex;
  margin: 0 10% 0 10%;
`;

export default App;
