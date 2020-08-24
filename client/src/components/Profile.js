import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components/macro";
import moment from "moment";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import Spinner from "./Spinner";

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
          setTweets(data);
        })
        .catch((error) => {
          console.log(error);
          history.push("/error");
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
          <Paragraph>@{currentUser.profile.handle}</Paragraph>
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
            <Span style={{ fontWeight: "bold" }}>
              {currentUser.profile.numFollowing}
            </Span>{" "}
            Following
          </Paragraph>
          <Paragraph>
            <Span style={{ fontWeight: "bold" }}>
              {currentUser.profile.numFollowers}
            </Span>{" "}
            Followers
          </Paragraph>
        </Div>
      </AboutUser>
    </ProfileBody>
  );
};

const ProfileBody = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid blue;
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

const Paragraph = styled.p`
  padding: 10px;
`;

const DisplayName = styled.h3`
  font-size: 2rem;
  padding-left: 10px;
`;

const Div = styled.div`
  display: flex;
`;

const Span = styled.div`
  font-weight: bold;
`;

export default CurrentUserProfile;
