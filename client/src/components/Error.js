// Libraries
import React from "react";
import { FaBomb } from "react-icons/fa";

// Styles
import styled from "styled-components";

const Error = () => {
  return (
    <Div>
      <FaBomb style={{ fontSize: "30px" }} />
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
  justify-content: center;
  align-items: center;
  padding: 25px;
  width: 100%;
  border: solid 1px grey;
  text-align: center;
`;

export default Error;
