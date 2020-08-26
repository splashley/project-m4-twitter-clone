// Libraries
import React from "react";
import { useHistory } from "react-router";
import moment from "moment";
import { FiMapPin, FiCalendar } from "react-icons/fi";

// Components
import Spinner from "./Spinner";
import Tweet from "./Tweet";

// Styles
import styled from "styled-components";

const CurrentUserProfile = ({ currentUser }) => {
  const [tweets, setTweets] = React.useState(null);
  const history = useHistory();

  React.useEffect(() => {
    if (currentUser) {
      fetch(`/api/${currentUser.profile.handle}/feed`, { method: "GET" })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((data) => {
          console.log(data);
          setTweets(data);
        })
        .catch((error) => {
          console.log(error);
          history.push("/404");
        });
    }
  }, [currentUser]);

  return !currentUser ? (
    <Spinner />
  ) : (
    <ProfileBody>
      <Banner src={currentUser.profile.bannerSrc} />
      <Avatar src={currentUser.profile.avatarSrc} />
      <AboutUser>
        <Div>
          <DisplayName>{currentUser.profile.displayName}</DisplayName>
        </Div>
        <Div>
          <DisplayHandle>@{currentUser.profile.handle}</DisplayHandle>
        </Div>
        <Div>
          <Paragraph>{currentUser.profile.bio}</Paragraph>
        </Div>
        <Div>
          <Paragraph>
            <FiMapPin /> {currentUser.profile.location}
          </Paragraph>
          <Paragraph>
            <FiCalendar /> Joined:{" "}
            {moment(currentUser.profile.joined).format("MMMM YYYY")}
          </Paragraph>
        </Div>
        <Div>
          <Paragraph>
            <Span>{currentUser.profile.numFollowing}</Span> Following
          </Paragraph>
          <Paragraph>
            <Span>{currentUser.profile.numFollowers}</Span> Followers
          </Paragraph>
        </Div>
      </AboutUser>
      <Ul>
        <CustomLi>
          {tweets &&
            tweets.tweetIds.map((tweetId) => {
              let foundTweet = tweets.tweetsById[tweetId];
              return <Tweet key={tweetId} tweet={foundTweet} />;
            })}
        </CustomLi>
      </Ul>
    </ProfileBody>
  );
};

// Styles
const ProfileBody = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px grey;
  max-width: 1000px;
`;

const Banner = styled.img`
  height: 300px;
  width: 100%;
`;

const Avatar = styled.img`
  height: 160px;
  width: 160px;
  border-radius: 50%;
  margin: 25px;
  border: 3px solid white;
  position: absolute;
  top: 220px;
`;

const AboutUser = styled.div`
  padding-top: 120px;
  padding-left: 10px;
`;

const CustomLi = styled.li`
  border-bottom: 1px solid gainsboro;
  &:first-child {
    padding-top: 20px;
  }
`;

const Paragraph = styled.p`
  padding: 10px;
`;

const DisplayName = styled.h3`
  font-size: 2rem;
  padding-left: 10px;
`;

const DisplayHandle = styled.p`
  font-size: 1rem;
  padding-left: 10px;
  color: grey;
`;

const Div = styled.div`
  display: flex;
`;

const Span = styled.span`
  font-weight: bold;
`;

const Ul = styled.ul`
  margin: 0;
  border-right: 1px solid gainsboro;
`;

export default CurrentUserProfile;
