import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { BsPerson, BsBookmark } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import LogoSrc from "../logo.svg";
import { CurrentUserContext } from "./CurrentUserContext";
import Spinner from "./Spinner";

const Sidebar = () => {
  const { currentUser } = React.useContext(CurrentUserContext);
  return !currentUser ? (
    <Spinner />
  ) : (
    <Div>
      <UL>
        <Li>
          <Logo src={LogoSrc} />
        </Li>
        <Li>
          <FiHome />
          <NavBarLink exact to="/">
            Home
          </NavBarLink>
        </Li>
        <Li>
          <BsPerson />
          <NavBarLink exact to={"/" + currentUser.profile.handle}>
            Profile
          </NavBarLink>
        </Li>
        <Li>
          <AiOutlineBell />
          <NavBarLink exact to="/notifications">
            Notifications
          </NavBarLink>
        </Li>
        <Li>
          <BsBookmark />
          <NavBarLink exact to="/bookmarks">
            Bookmarks
          </NavBarLink>
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

const NavBarLink = styled(NavLink)`
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
