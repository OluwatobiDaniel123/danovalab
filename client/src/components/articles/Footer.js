import React from "react";
import styled from "styled-components";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: rgb(46, 46, 240);
  text-align: center;
  padding: 40px 20px;
  border-top: 1px solid rgb(0, 195, 255);
`;

const FooterContent = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const FooterText = styled.p`
  color: white;
  margin: 0;
  font-size: 14px;
`;

const FooterLink = styled.a`
  color: ${(props) => props.color || "grey"};
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.hoverColor || "lightgray"};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; 2024 Danovalab Profile. All Rights Reserved. Powered by
        Danovalab.
      </FooterText>
      <FooterContent>
        <FooterLink
          href="mailto:danieloluwatobi765@gmail.com"
          color="grey"
          hoverColor="darkgrey"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send Email"
        >
          <MdOutlineMailOutline />
        </FooterLink>
        <FooterLink
          href="https://api.whatsapp.com/send?phone=2348109830746"
          color="green"
          hoverColor="darkgreen"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </FooterLink>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
