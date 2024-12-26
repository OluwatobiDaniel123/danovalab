import React from "react";
import logo from "../../assets/images/logo.jpg";
import facebook from "../../assets/images/icon-facebook.svg";
import youtube from "../../assets/images/icon-youtube.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Footer = () => {
  const Box = styled.div`
    background: lightblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

    @media (max-width: 675px) {
      flex-direction: column;
    }
  `;
  const Box2 = styled.div`
    display: flex;
    flex-direction: column;
    list-style: none;
    align-items: center;
    gap: 10px;
    color: ${(props) => (props.isActive ? "#4caf50" : "#92781a")};
    font-weight: ${(props) => (props.isActive ? "800" : "600")};
    opacity: 0.9;
  `;
  const Box3 = styled.div`
    display: flex;
  `;
  const Ul = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    gap: 10px;
    color: ${(props) => (props.isActive ? "#4caf50" : "#92781a")};
    font-weight: ${(props) => (props.isActive ? "800" : "600")};
    opacity: 0.9;
  `;
  const Image1 = styled.img`
    height: 90px;
  `;
  const Li = styled.li`
    display: flex;
    flex-direction: column;

    padding: 2px;
    color: ${(props) => (props.isActive ? "#4caf50" : "#92781a")};
    font-weight: ${(props) => (props.isActive ? "800" : "600")};
    opacity: 0.8;
    &:hover {
      color: #4caf50;
    }
  `;

  const Li2 = styled.li`
    display: flex;
    flex-direction: column;
    padding: 2px;
    color: ${(props) => (props.isActive ? "#4caf50" : "#92781a")};
    font-weight: ${(props) => (props.isActive ? "800" : "600")};
    opacity: 0.8;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.4);
    }
  `;
  const Imag2 = styled.img`
    width: 20px;
  `;

  const Box4 = styled.div`
    display: flex;
    list-style: none;
    align-items: center;
    color: white;
    gap: 30px;
  `;

  const fadeIn = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
`;

  const Button = styled.button`
    margin: 20px 0 10px 0;
    color: black;
    font-family: sans-serif;
    background: linear-gradient(90deg, #4caf50, #92781a, #a3c651);
    padding: 10px;
    width: 200px;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      border: 3px solid #4caf50;
      transform: scale(1.1);
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
    }
  `;

  const Box5 = styled.div``;
  const Ul2 = styled.ul``;
  const Box6 = styled.div`
    color: white;
    padding: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const P = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    color: ${(props) => (props.isActive ? "#4caf50" : "#92781a")};
    font-weight: ${(props) => (props.isActive ? "800" : "600")};
  `;
  const Box7 = styled.div``;
  return (
    <Box>
      <Box2>
        <Box3>
          <Image1 src={logo} alt="Company Logo" />
        </Box3>
        <Ul>
          <Li2>
            <Imag2 src={facebook} alt="Imag2" />
          </Li2>{" "}
          <Li2>
            <Imag2 src={youtube} alt="Imag2" />
          </Li2>{" "}
          <Li2>
            <Imag2 src={twitter} alt="Imag2" />
          </Li2>{" "}
          <Li2>
            <Imag2 src={pinterest} alt="Imag2" />
          </Li2>{" "}
          <Li2>
            <Imag2 src={instagram} alt="Imag2" />
          </Li2>{" "}
        </Ul>
      </Box2>

      <Box4>
        <Box5>
          <Ul2>
            <Link to="/about">
              <Li>About Us</Li>
            </Link>

            <Link to="/contact">
              <Li>Contact</Li>
            </Link>

            <Link to="/blog">
              <Li>Blog</Li>
            </Link>
          </Ul2>
        </Box5>

        <Box5>
          <Ul2>
            <Link to="/career">
              <Li>Careers</Li>
            </Link>

            <Link to="/support">
              <Li>Support</Li>
            </Link>

            <Link to="/policy">
              <Li>Events</Li>
            </Link>
          </Ul2>
        </Box5>
      </Box4>

      <Box6>
        <Link to="/register">
          <Button>Request Invite</Button>
        </Link>

        <P> &copy; XTiiM. All Rights Reserved </P>
        <P>Powered by danetech </P>
      </Box6>
    </Box>
  );
};

export default Footer;
