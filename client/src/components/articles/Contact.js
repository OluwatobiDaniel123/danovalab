import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ContactSection = styled.section`
  // display: flex;
  // flex-direction: column;
  align-items: center;
  text-align: center;
  // position: relative;

  // justify-content: center;
  // background: #201f1f;
`;

const ContactContainer = styled.div`
  width: 100%;
  // height: 100vh;
  text-align: center;
  // position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 30px;
  // margin: 20px;
  // gap: 20px;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  border-radius: 7px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  h2 {
    font-variant: small-caps;
    font-size: 40px;
    color: black;
  }

  input,
  textarea {
    width: 100%;
    padding: 1rem;
    font-size: bold;
    font-weight: 800;
    letter-spacing: 1.3px;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid lightblue;
    resize: none;
    color: black;
    &:hover {
      border: 2px solid rgb(0, 195, 255);
      transform: scale(1.02);
    }
    transition: all 0.3s linear;
  }
`;

const ContactButton = styled.button`
  background: lightblue;
  color: black;
  padding: 10px;
  width: 70%;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.3s linear;
  &:hover {
    transform: scale(1.01);
    background: rgb(0, 195, 255);
  }
`;

const Box = styled.div`
  padding: 1px;
  display: flex;
  align-items: center;
  transition: all 0.3s linear;

  &:hover {
    transform: scale(1.09);
  }
`;

const SocialDiv = styled.div`
  display: flex;
  gap: 55px;
  justify-content: center;
`;

const P = styled.p``;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qh08omd",
        "template_icla7gq",
        form.current,
        "uDj1nlX9BVEqunnYs"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully...");
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <ContactSection>
      <ContactContainer>
        <DotLottieReact
          src="https://lottie.host/113aa8aa-b464-41a9-be0f-906d7a2d63b8/SSzUfeyU3r.lottie"
          loop
          autoplay
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <ContactForm ref={form} onSubmit={sendEmail}>
          <h2>Contact Us</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            rows="7"
            name="message"
            placeholder="Your Message"
            required
          />
          <ContactButton type="submit">Send Message</ContactButton>
        </ContactForm>
      </ContactContainer>
      <SocialDiv>
        <Box>
          <a target="_blank" href="mailto:danieloluwatobi765@gmail.com">
            <MdOutlineMailOutline
              style={{
                color: "lightblue",
                fontSize: 50,
              }}
            />
          </a>
        </Box>
        <Box>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=2348109830746"
          >
            <FaWhatsapp
              style={{
                color: "lightblue",
                fontSize: 50,
              }}
            />
          </a>
        </Box>
        <Box>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=2348109830746"
          >
            <FaWhatsapp
              style={{
                color: "lightblue",
                fontSize: 50,
              }}
            />
          </a>
        </Box>
        <Box>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=2348109830746"
          >
            <FaWhatsapp
              style={{
                color: "lightblue",
                fontSize: 50,
              }}
            />
          </a>
        </Box>
      </SocialDiv>
    </ContactSection>
  );
};

export default Contact;
