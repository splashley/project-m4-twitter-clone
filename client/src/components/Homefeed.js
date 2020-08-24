import React from "react";
import styled from "styled-components";

// Components
import HomeBar from "./HomeBar";
import TextArea from "./TextArea";
import Tweet from "./Tweet";

const Homefeed = () => {
  return (
    <Div>
      <HomeBar />
      <TextArea />
      <Tweet />
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
