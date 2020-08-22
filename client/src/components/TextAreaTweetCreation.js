import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import CurrentUserContext from "./CurrentUserContext";

const TextAreaTweetCreation = () => {
  const [currentTweet, setCurrentTweet] = useState("");
  const [currentUser, setCurrentUser] = React.useState(null);

  const maxChar = 280;
  const maxCharErrorMessage = "You've reached the limit of 280 characters.";

  const handleSubmitTweet = () => {
    fetch(`/api/tweet`, {
      method: "POST",
      body: JSON.stringify({ status: currentTweet }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      })

      .catch(console.error);
  };

  return (
    <Div>
      <Avatar src={currentUser.profile.avatarSrc} />
      <Form>
        <TextArea
          placeholder="What's happening?"
          name="status"
          type="text"
          value={currentTweet}
        />
        <CharacterCount>{maxChar - currentTweet.length}</CharacterCount>
        <TweetSubmitButton
          onClick={handleSubmitTweet}
          disabled={currentTweet.length < 0}
          type="submit"
        >
          Meow
        </TweetSubmitButton>
      </Form>
    </Div>
  );
};

// Styles
const Div = styled.div`
  width: 100%;
  border: solid 1px grey;
`;

const Form = styled.form`
  width: 100%;
  height: 300px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 70px;
  border: none;
  resize: none;
  outline: none;
  padding: 10px;
`;

const Avatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin: 20px;
`;

const CharacterCount = styled.p`
  color: black;
  padding: 5px;
  text-align: right;
`;

const TweetSubmitButton = styled.button`
  padding: 10px;
  background-color: hsl(258deg, 100%, 50%);
  color: white;
  text-align: white;
  border-radius: 25px;
  width: 100px;
`;

export default TextAreaTweetCreation;
