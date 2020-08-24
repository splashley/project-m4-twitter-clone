import React from "react";
import styled, { keyframes } from "styled-components";
import { FiLoader } from "react-icons/fi";

const Spinner = () => {
  return (
    <SpinnerDiv>
      <FiLoader />
    </SpinnerDiv>
  );
};

const spin = keyframes`
100% { transform: rotate(360deg); }
`;

const SpinnerDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  animation: ${spin} 5s linear infinite;
`;

export default Spinner;
