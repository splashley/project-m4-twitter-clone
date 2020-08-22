import React from "react";
import styled from "styled-components";

const TextAreaForCreatingTweets = () => {
  return (
    <Div>
      TEST
      <Avatar src={currentUser.profile.avatarSrc} alt="photo" />
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
`;

const Avatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin: 20px;
`;

export default TextAreaForCreatingTweets;
