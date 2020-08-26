// Libraries
import React from "react";
import { useHistory } from "react-router";

// Components
import Tweet from "./Tweet";
import PostTweet from "./PostTweet";
import HomeBar from "./HomeBar";
import Spinner from "./Spinner";

// Styles
import styled from "styled-components";

const HomeFeed = () => {
  const [tweets, setTweets] = React.useState(null);
  const history = useHistory();

  const postTweet = (data) => {
    getTweets();
  };

  const getTweets = () => {
    fetch("/api/me/home-feed", { method: "GET" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          history.push("/error");
        }
      })
      .then((data) => {
        setTweets(data);
      })
      .catch((error) => {
        console.log(error);
        history.push("/error");
      });
  };
  React.useEffect(getTweets, []);

  return !tweets ? (
    <Spinner />
  ) : (
    <Div>
      <HomeBar />
      <PostTweet postTweet={postTweet} />
      <TweetFeed>
        {" "}
        {tweets.tweetIds.map((tweetId) => {
          let foundTweet = tweets.tweetsById[tweetId];
          return (
            <Tweet key={tweetId} tweet={foundTweet} aria-label="View Tweet" />
          );
        })}
      </TweetFeed>
    </Div>
  );
};

const TweetFeed = styled.div`
  color: black;
`;

const Div = styled.div`
  width: 50%;
`;

export default HomeFeed;
