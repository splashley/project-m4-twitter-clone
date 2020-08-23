import React from "react";
import styled, { keyframes } from "styled-components";
import { FiLoader } from "react-icons/fi";

const LoadingSign = () => {
  return (
    <LoadingSignDiv>
      <FiLoader />
    </LoadingSignDiv>
  );
};

const spin = keyframes`
100% { transform: rotate(360deg); }
`;

const LoadingSignDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  animation: ${spin} 5s linear infinite;
`;

export default LoadingSign;
