import React from "react";
import styled from "styled-components";
import { FiHome } from "react-icons/fi";
import { BsPerson, BsBookmark } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import LogoSrc from "../logo.svg";

const Sidebar = () => {
  return (
    <Div>
      <UL>
        <Li>
          <Logo src={LogoSrc} />
        </Li>
        <Li>
          <FiHome />
          <A>
            <a href="/">Home</a>
          </A>
        </Li>
        <Li>
          <BsPerson />
          <A>
            <a href="/:profileId">Profile</a>
          </A>
        </Li>
        <Li>
          <AiOutlineBell />
          <A>
            <a href="/notifications">Notifications</a>
          </A>
        </Li>
        <Li>
          <BsBookmark />
          <A>
            <a href="/bookmarks">Bookmarks</a>
          </A>
        </Li>
        <Li>
          <MeowButton>Meow</MeowButton>
        </Li>
      </UL>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  width: 25%;
  border: solid 1px grey;
`;

const Logo = styled.img`
  height: 40px;
`;

const UL = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  padding: 10px;
`;

const A = styled.a`
  font-weight: bold;
  color: black;
  padding-left: 15px;
`;

const MeowButton = styled.button`
  padding: 10px;
  background-color: hsl(258deg, 100%, 50%);
  color: white;
  text-align: white;
  border-radius: 25px;
  width: 50%;
`;

export default Sidebar;
