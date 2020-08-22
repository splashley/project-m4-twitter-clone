import React from "react";
import styled from "styled-components";
import { IoMdArrowBack } from "react-icons/io";

const BackBar = () => {
  return (
    <Div>
      <IoMdArrowBack /> <Link>Meow</Link>
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
  padding-left: 15px;
`;

export default BackBar;
