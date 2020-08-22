import React from "react";
import styled from "styled-components";
import { Bomb } from "react-icons-kit/noto_emoji_regular/u1F4A3";

const Error404 = () => {
  return (
    <Div>
      <Bomb />
      <h1>An unknown error has occured</h1>
      <h2>
        Please try refreshing the page, or contact support if the problem
        persists.
      </h2>
    </Div>
  );
};

// Styles
const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  width: 100%;
  border: solid 1px grey;
  text-align: center;
`;

export default Error404;
