import React from "react";
import styled from "styled-components";
import TweetDetails from "./TweetDetails";
import TweetActions from "./TweetActions";
import TweetAction from "./TweetAction";

const Tweet = ({ tweet }) => {
  console.log(tweet);
  return (
    <Div>
      <TweetDetails />
      <TweetAction />
      <TweetActions />
    </Div>
  );
};

// Styles
const Div = styled.div`
  padding: 25px;
  width: 100%;
  border: solid 1px grey;
`;

export default Tweet;
