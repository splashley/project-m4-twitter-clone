// Libraries
import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Components
import Tweet from "./Tweet";
import Spinner from "./Spinner";

const TweetDetails = () => {
  const { tweetId } = useParams();
  const [tweet, setTweet] = useState(null);
  const [tweetsStatus, setTweetsStatus] = useState("loading");
  React.useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTweet(data.tweet);
        setTweetsStatus("idle");
      })
      .catch((error) => {
        console.log("Error! Something went wrong.", error);
        if (error) {
          window.location.replace("/error");
        }
      });
  }, [tweetId]);
  return tweetsStatus === "idle" ? (
    <Tweet tweet={tweet} />
  ) : tweetsStatus === "loading" ? (
    <Spinner />
  ) : (
    <div>Error</div>
  );
};

export default TweetDetails;
