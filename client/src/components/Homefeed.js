import React from "react";
import styled from "styled-components";

// Components
import HomeBar from "./HomeBar";
import TextAreaTweetCreation from "./TextAreaTweetCreation";
import TweetDetails from "./TweetDetails";

const Homefeed = () => {
  return (
    <Div>
      <HomeBar />
      <TextAreaTweetCreation />
      <TweetDetails />
    </Div>
  );
};

// Styles
const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: solid 1px grey;
`;

export default Homefeed;
