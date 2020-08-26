// Libraries
import React from "react";
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
import { FiMessageCircle, FiRepeat, FiHeart, FiShare } from "react-icons/fi";

// Components
import Spinner from "./Spinner";

// Styles
import styled from "styled-components";

const Tweet = ({ tweet }) => {
  let history = useHistory();
  function handleClick(ev) {
    ev.preventDefault();
    history.push(`/profile/${tweet.author.handle}`);
  }
  return tweet ? (
    <TweetDiv>
      <Avatar src={tweet.author.avatarSrc} onClick={handleClick} />
      <AuthorDisplayName onClick={handleClick}>
        <strong> {tweet.author.displayName} </strong>
      </AuthorDisplayName>
      <AuthorHandle onClick={handleClick}>@{tweet.author.handle} </AuthorHandle>
      <TweetStatus>{tweet.status}</TweetStatus>
      <Link to={`/tweet/${tweet.id}`}>
        <MediaPic src={tweet.media.length > 0 ? tweet.media[0].url : ""} />
      </Link>
      <PostedDate>
        {moment(tweet.timestamp).format("hh:mm A")}
        <span style={{ marginRight: "10px", color: "gray" }}>.</span>
        {moment(tweet.timestamp).format("MMM DD YYYY")}
        <span style={{ marginRight: "10px", color: "gray" }}>.</span>
        <span>Critter Web App</span>
      </PostedDate>
      <TweetActions>
        <FiMessageCircle />
        <FiRepeat />
        <FiHeart />
        <FiShare />
      </TweetActions>
    </TweetDiv>
  ) : (
    <Spinner />
  );
};

const TweetDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  align-items: left;
  margin: 10px 0 10px 0;
  border: 0.5px solid lightgrey;
  padding: 10px;
  text-decoration: none;
`;

const Avatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin-right: 20px;
`;

const AuthorDisplayName = styled.span`
  font-size: 1rem;
`;

const AuthorHandle = styled.span`
  font-size: 1rem;
  color: darkgray;
`;

const TweetStatus = styled.span`
  font-size: 1.5rem;
  color: black;
  word-wrap: break-word;
`;

const MediaPic = styled.img`
  border-radius: 20px;
  width: 50%;
`;

const PostedDate = styled.span`
  font-size: 1rem;
  color: darkgray;
`;

const TweetActions = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 0 50px 0 50px;
  justify-content: space-between;
  width: 75%;
`;

export default Tweet;
