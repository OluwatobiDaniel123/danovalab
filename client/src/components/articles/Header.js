import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { IoClose, IoMenuOutline } from "react-icons/io5";

const HeaderContainer = styled.div`
  background-color: white;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
`;

const Box = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
`;

const LogoImage = styled.img`
  height: 60px;
`;

const HeaderUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  font-size: 16px;

  a {
    text-decoration: none;
    color: ${(props) => (props.isActive ? "#007bff" : "#333")};
    font-weight: ${(props) => (props.isActive ? "700" : "600")};
    padding: 8px 15px;
    border-radius: 5px;

    transition: all 0.3s ease;

    &:hover {
      color: #fff;
      background-color: #007bff;
      transform: translateY(-2px);
    }
  }
`;

const NavIcon = styled.div`
  @media (min-width: 769px) {
    display: none;
  }

  svg {
    font-size: 28px;
    color: #333;
    cursor: pointer;
  }
`;

const SideNav = styled.div`
  position: fixed;
  top: 0;
  left: ${({ show }) => (show ? "0" : "-100%")};
  width: 70%;
  height: 100vh;
  background-color: #333;
  color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: left 0.3s ease;
  z-index: 999;
`;

const SideNavItem = styled(Link)`
  color: ${(props) => (props.isActive ? "#007bff" : "white")};
  font-weight: ${(props) => (props.isActive ? "700" : "500")};
  text-decoration: none;
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

const QuoteButton = styled.button`
  background: linear-gradient(45deg, #007bff, #00d4ff);
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
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
          <LogoImage src={logo} alt="Logo" />
        </Link>

        <HeaderUl>
          {["/", "/Service", "/Portfolio", "/About", "/Contact"].map(
            (path, index) => (
              <NavItem key={index} isActive={activeNav === path}>
                <Link to={path}>{path === "/" ? "Home" : path.slice(1)}</Link>
              </NavItem>
            )
          )}
          <QuoteButton>Get a Quote</QuoteButton>
        </HeaderUl>

        <NavIcon onClick={toggleNav}>
          {showNav ? <IoClose /> : <IoMenuOutline />}
        </NavIcon>
      </Box>

      <SideNav show={showNav}>
        {["/", "/Service", "/Portfolio", "/About", "/Contact"].map(
          (path, index) => (
            <SideNavItem
              key={index}
              to={path}
              isActive={activeNav === path}
              onClick={() => setShowNav(false)}
            >
              {path === "/" ? "Home" : path.slice(1)}
            </SideNavItem>
          )
        )}
        <QuoteButton>Get a Quote</QuoteButton>
      </SideNav>
    </HeaderContainer>
  );
};

export default Header;
