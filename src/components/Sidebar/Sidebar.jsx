import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SideMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SideMenu>
          <SidebarLink
            to="home"
            onClick={toggle}
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-80}
          >
            Home
          </SidebarLink>
          <SidebarLink
            to="aboutme"
            onClick={toggle}
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-80}
          >
            About Me
          </SidebarLink>
          <SidebarLink
            to="services"
            onClick={toggle}
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-80}
          >
            Services
          </SidebarLink>
          <SidebarLink
            to="portfolio"
            onClick={toggle}
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-80}
          >
            Portfolio
          </SidebarLink>
          <SidebarLink
            to="contactme"
            onClick={toggle}
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contact
          </SidebarLink>
        </SideMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
