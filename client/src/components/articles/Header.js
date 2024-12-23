import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";

const HeaderContainer = styled.div`
  background-color: white;
  box-shadow: 0 1px 5px darkblue;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Box = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImage = styled.img`
  height: 80px;
`;

const HeaderUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 25px;
  margin: 0;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  font-size: 18px;

  a {
      text-decoration: none;
      color: ${(props) =>
        props.isActive ? "rgb(0, 195, 255)" : "rgb(255, 0, 255)"}; 
      font-weight: ${(props) => (props.isActive ? "800" : "600")};
      padding: 5px 10px;
      position: relative;
      display: inline-block;
      transition: color 0.3s ease, transform 0.3s ease;
      &:hover {
        color: rgb(5, 197, 255); 
        background-color: rgba(
          30,
          844,
          255,
          0.1
        ); 
        border-radius: 5px;
        transform: translateY(-3px); 
        
      }
`;

const NavIcon = styled.div`
  padding-right: 10px;
  @media (min-width: 800px) {
    display: none;
  }
`;

const SideNav = styled.div`
  position: fixed;
  top: 0;
  left: ${({ show }) => (show ? "0" : "-100%")};
  width: 280px;
  height: 100vh;
  background-color: #201f1f;

  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  padding: 20px;
  transition: left 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 999;

  @media (min-width: 700px) {
    display: none;
  }
`;

const SideNavItem = styled(Link)`
  color: ${(props) => (props.isActive ? "#4caf50" : "#92781a")};
  font-weight: ${(props) => (props.isActive ? "800" : "600")};
  text-decoration: none;
  font-size: 18px;
  padding: 10px 0;
  border-bottom: 1px solid #444;
  transition: color 0.3s;
  transition: color 0.3s ease, transform 0.3s ease;
  &:hover {
    color: #4caf50;
    background-color: rgba(30, 844, 255, 0.1);
    border-radius: 5px;
    padding: 10px;
    transform: translateY(-3px);
  }
`;

const Header = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState(location.pathname);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location]);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <HeaderContainer>
      <Box>
        <Link to="/">
          <LogoImage src={logo} alt="Company Logo" />
        </Link>

        {/* Desktop Nav */}
        <HeaderUl>
          <NavItem isActive={activeNav === "/"}>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem isActive={activeNav === "/artists"}>
            <Link to="/artists">Artists</Link>
          </NavItem>
          <NavItem isActive={activeNav === "/events"}>
            <Link to="/events">Portfolio</Link>
          </NavItem>
          <NavItem isActive={activeNav === "/music"}>
            <Link to="/music">About Us</Link>
          </NavItem>
          <NavItem isActive={activeNav === "/contact"}>
            <Link to="/contact">Contact</Link>
          </NavItem>
        </HeaderUl>

        {/* Mobile Nav Icon */}
        <NavIcon onClick={toggleNav} aria-label="Toggle navigation menu">
          {showNav ? (
            <div></div>
          ) : (
            <IoMenuOutline style={{ fontSize: 45, color: "grey" }} />
          )}
        </NavIcon>
      </Box>

      {/* Side Nav for Mobile */}
      <SideNav show={showNav}>
        <IoClose
          style={{ fontSize: 40, color: "grey", alignSelf: "flex-end" }}
          onClick={toggleNav}
        />
        <SideNavItem to="/" onClick={() => setShowNav(false)}>
          Home
        </SideNavItem>
        <SideNavItem to="/artists" onClick={() => setShowNav(false)}>
          Artists
        </SideNavItem>
        <SideNavItem to="/music" onClick={() => setShowNav(false)}>
          Music
        </SideNavItem>
        <SideNavItem to="/events" onClick={() => setShowNav(false)}>
          Events
        </SideNavItem>
        <SideNavItem to="/contact" onClick={() => setShowNav(false)}>
          Contact
        </SideNavItem>
      </SideNav>
    </HeaderContainer>
  );
};

export default Header;
