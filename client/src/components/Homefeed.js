import React from "react";
import styled from "styled-components";

// Components
import HomeBar from "./HomeBar";
import TextArea from "./TextArea";
import TweetDetails from "./TweetDetails";

const Homefeed = () => {
  return (
    <Div>
      <HomeBar />
      <TextArea />
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
