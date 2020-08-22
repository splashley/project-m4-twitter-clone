import React from "react";
import styled from "styled-components";

const HomeBar = () => {
  return (
    <Div>
      <Link>Home</Link>
    </Div>
  );
};

// Styles
const Div = styled.div`
  padding: 25px;
  width: 100%;
  border: solid 1px grey;
`;

const Link = styled.a`
  font-weight: bold;
  color: black;
`;

export default HomeBar;
