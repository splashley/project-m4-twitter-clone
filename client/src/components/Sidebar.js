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
          <Link>
            <a href="url">Home</a>
          </Link>
        </Li>
        <Li>
          <BsPerson />
          <Link>
            <a href="url">Profile</a>
          </Link>
        </Li>
        <Li>
          <AiOutlineBell />
          <Link>
            <a href="url">Notifications</a>
          </Link>
        </Li>
        <Li>
          <BsBookmark />
          <Link>
            <a href="url">Bookmarks</a>
          </Link>
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

const Link = styled.a`
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
  width: 100%;
`;

export default Sidebar;
