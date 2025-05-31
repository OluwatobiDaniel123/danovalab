import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaLocationArrow,
  FaMap,
  FaSearchLocation,
  FaStreetView,
  FaPhone,
  FaClock,
  FaCalendar,
  FaVoicemail,
  FaMailBulk,
  FaMailchimp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const FooterContainer = styled.footer`
  // background: #000;
  background: linear-gradient(120deg, #0d1117, #161b22);

  color: #fff;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px 5px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 20px;
`;

const FooterHeader = styled.h3`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  color: #58a6ff;
`;

const FooterText = styled.p`
  margin: 5px 0;
  padding: 6px;
`;

const FooterLink = styled.a`
  width: 200px;
  color: #fff;
  text-decoration: none;
  margin: 5px 0;
  display: block;
  outline: none;
  padding: 1px;

  &:hover {
    color: lightblue;
  }
`;

const FooterLink2 = styled.p`
  width: 200px;
  color: #fff;
  text-decoration: none;
  margin: 5px 0;
  display: block;
  outline: none;
  padding: 1px;

  &:hover {
    color: lightblue;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 10px;

  a {
    color: #fff;
    margin: 0 13px;
    font-size: 22px;
    transition: 0.3s ease;

    &:hover {
      color: lightblue;
      transform: translateY(-3px);
    }
  }
`;
const LogoImage = styled.img`
  height: 60px;
  background: #f9f9f9;
  border-radius: 50%;
  box-shadow: 0 0 0 2px lightblue;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterHeader>
            <LogoImage
              src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1736662183/logo_vuude4.png"
              loading="lazy"
              alt="LogoImg"
            />
          </FooterHeader>
          <FooterText>Lagos, Nigeria</FooterText>
          <FooterText>Odonla. Odogunyan, Ikorodu, Lagos</FooterText>
          <FooterText>+234 (0)810 9830 746</FooterText>
        </FooterSection>
        <FooterSection>
          <FooterHeader>United States</FooterHeader>
          <FooterText>
            2300 Camp Oando nowway, Cof 143 #1008 dollins Park, GA 34537, United
            States
          </FooterText>
          <FooterText>+1 (770) 369-1794</FooterText>
        </FooterSection>
        <FooterSection>
          <FooterHeader>Services</FooterHeader>
          <Link to="request_quote">
            <FooterLink2>Software Development</FooterLink2>
          </Link>
          <Link to="request_quote">
            <FooterLink2>Front-End Development</FooterLink2>
          </Link>
          <Link to="request_quote">
            <FooterLink2>Back-End Development</FooterLink2>
          </Link>
          <Link to="request_quote">
            <FooterLink2>Web Development</FooterLink2>
          </Link>
          <Link to="request_quote">
            <FooterLink2>Maintainability</FooterLink2>
          </Link>
        </FooterSection>

        <FooterSection>
          <FooterHeader>Contact Us</FooterHeader>
          <FooterLink
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "10px",
            }}
          >
            <FaStreetView />
            <FooterText style={{ padding: 0, margin: 0 }}>
              Odonla. Odogunyan, Ikorodu, Lagos
            </FooterText>
          </FooterLink>
          <FooterLink
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "10px",
            }}
          >
            <FaPhone />
            <FooterText style={{ padding: 0, margin: 0 }}>
              +234 (0)810 9830 746
            </FooterText>
          </FooterLink>
          <FooterLink
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "10px",
            }}
          >
            <FaClock />
            <FooterText style={{ padding: 0, margin: 0 }}>
              Mon - Friday. 08 am - 09 pm{" "}
            </FooterText>
          </FooterLink>
          <FooterLink
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "10px",
            }}
          >
            <FaMailBulk />
            <FooterText style={{ padding: 0, margin: 0 }}>
              danieloluwatobi@danovalab.com
            </FooterText>
          </FooterLink>
        </FooterSection>
      </FooterContent>
      <SocialIcons>
        <FooterLink
          style={{ width: "auto" }}
          href="https://www.facebook.com"
          aria-label="Facebook"
        >
          <FaFacebook />
        </FooterLink>
        <FooterLink
          style={{ width: "auto" }}
          href="https://www.twitter.com"
          aria-label="Twitter"
        >
          <FaTwitter />
        </FooterLink>
        <FooterLink
          style={{ width: "auto" }}
          href="https://www.linkedin.com"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </FooterLink>
        <FooterLink
          style={{ width: "auto" }}
          href="https://www.instagram.com"
          aria-label="Instagram"
        >
          <FaInstagram />
        </FooterLink>
      </SocialIcons>

      <div
        style={{
          borderTop: "1px solid rgb(0, 195, 255)",
          width: "100%",
          textAlign: "center",
        }}
      >
        <FooterText style={{ marginTop: "20px" }}>
          &copy; {new Date().getFullYear()} Danovalab. All rights reserved.
        </FooterText>
      </div>
    </FooterContainer>
  );
};

export default Footer;
