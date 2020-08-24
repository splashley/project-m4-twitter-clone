import React from "react";
import styled from "styled-components";
import { FiHome } from "react-icons/fi";
import { BsPerson, BsBookmark } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import LogoSrc from "../logo.svg";
import { CurrentUserContext } from "./CurrentUserContext";

const Sidebar = () => {
  const { currentUser } = React.useContext(CurrentUserContext);
  return (
    <Div>
      <UL>
        <Li>
          <Logo src={LogoSrc} />
        </Li>
        <Li>
          <FiHome />
          <NavLink exact to="/">
            Home
          </NavLink>
        </Li>
        <Li>
          <BsPerson />
          <NavLink exact to={"/" + currentUser.profile.handle}>
            Profile
          </NavLink>
        </Li>
        <Li>
          <AiOutlineBell />
          <NavLink exact to="/notifications">
            Notifications
          </NavLink>
        </Li>
        <Li>
          <BsBookmark />
          <NavLink exact to="/bookmarks">
            Bookmarks
          </NavLink>
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

const NavLink = styled.a`
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
