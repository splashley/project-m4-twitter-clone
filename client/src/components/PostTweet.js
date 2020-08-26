// Libraries
import React, { useState, useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";

// Components
import Spinner from "./Spinner";

// Styles
import styled from "styled-components";

const PostTweet = () => {
  const [currentTweet, setCurrentTweet] = useState("");
  const { currentUser } = useContext(CurrentUserContext);
  const [error, setError] = useState(false);
  const maxChar = 280;
  const maxCharacters = (characters) => {
    if (characters > 280) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleOnChange = (ev) => {
    maxCharacters(ev.target.value.length);
    setCurrentTweet(ev.target.value);
  };

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

  return !currentUser ? (
    <Spinner />
  ) : (
    <Div>
      <Avatar src={currentUser.profile.avatarSrc} />
      <Form onSubmit={handleSubmitTweet}>
        <TextAreaBox
          placeholder="What's happening?"
          type="text"
          name="content"
          value={currentTweet}
          onChange={handleOnChange}
        />
        <DivButton>
          <CharacterCount>{maxChar - currentTweet.length}</CharacterCount>
          <TweetSubmitButton disabled={currentTweet.length > 280} type="submit">
            Meow
          </TweetSubmitButton>
        </DivButton>
      </Form>
    </Div>
  );
};

// Styles
const Div = styled.div`
  width: 100%;
  border: solid 1px grey;
  display: flex;
  padding: 10px;
`;

const Form = styled.form`
  width: 100%;
  margin: 20px 20px 0 0;
`;

const TextAreaBox = styled.textarea`
  width: 100%;
  height: 200px;
  border-bottom: 1px solid grey;
`;

const Avatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin: 20px;
`;

const CharacterCount = styled.div`
  color: black;
  padding: 5px;
`;

const TweetSubmitButton = styled.button`
  padding: 10px;
  background-color: hsl(258deg, 100%, 50%);
  color: white;
  border-radius: 25px;
  width: 100px;
`;

const DivButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default PostTweet;
