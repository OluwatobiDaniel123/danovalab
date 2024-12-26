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
  border-radius: 50%;
  padding: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: 2px solid #92781a;
  // box-shadow: 0 150px 1000px 290px rgba(0, 0, 0, 0.1);
  transition: all 0.3s linear;

  &:hover {
    transform: scale(1.1);
    border: 2px solid #4caf50;
  }
`;

const SocialDiv = styled.div`
  // border-radius: 7px;
  // padding: 8px;
  // // height: 170px;
  // display: grid;
  // gap: 15px;
  // grid-template-columns: repeat(2, 1fr);
  // align-items: center;
  // position: absolute;
  //  width: 100%;
  border: 2px solid black;
  // top: 50%;
  // left: 50%;
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
    // <ContactSection>
    //   <ContactContainer>
    //     <ContactForm ref={form} onSubmit={sendEmail}>
    //       <h2>Contact Us</h2>
    //       <input
    //         type="text"
    //         name="name"
    //         placeholder="Your Full Name"
    //         required
    //       />
    //       <input type="email" name="email" placeholder="Your Email" required />
    //       <textarea
    //         rows="7"
    //         name="message"
    //         placeholder="Your Message"
    //         required
    //       />
    //       <ContactButton type="submit">Send Message</ContactButton>
    //     </ContactForm>
    //     <SocialDiv>
    //       <Box>
    //         <a target="_blank" href="mailto:danieloluwatobi765@gmail.com">
    //           <MdOutlineMailOutline
    //             style={{
    //               color: "#4caf50",
    //               width: 50,
    //               fontSize: 50,
    //               padding: 4,
    //               margin: 4,
    //             }}
    //           />
    //         </a>
    //       </Box>
    //       <Box>
    //         <a
    //           target="_blank"
    //           href="https://api.whatsapp.com/send?phone=2348109830746"
    //         >
    //           <FaWhatsapp
    //             style={{
    //               color: "#4caf50",
    //               width: 50,
    //               fontSize: 50,
    //               padding: 4,
    //               margin: 4,
    //             }}
    //           />
    //         </a>
    //       </Box>
    //       <Box>
    //         <a
    //           target="_blank"
    //           href="https://api.whatsapp.com/send?phone=2348109830746"
    //         >
    //           <FaWhatsapp
    //             style={{
    //               color: "#4caf50",
    //               width: 50,
    //               fontSize: 50,
    //               padding: 4,
    //               margin: 4,
    //             }}
    //           />
    //         </a>
    //       </Box>
    //       <Box>
    //         <a
    //           target="_blank"
    //           href="https://api.whatsapp.com/send?phone=2348109830746"
    //         >
    //           <FaWhatsapp
    //             style={{
    //               color: "#4caf50",
    //               width: 50,
    //               fontSize: 50,
    //               padding: 4,
    //               margin: 4,
    //             }}
    //           />
    //         </a>
    //       </Box>
    //     </SocialDiv>
    //   </ContactContainer>
    // </ContactSection>
    <ContactSection>
      <ContactContainer>
        <DotLottieReact
          src="https://lottie.host/113aa8aa-b464-41a9-be0f-906d7a2d63b8/SSzUfeyU3r.lottie"
          loop
          autoplay
          style={{
            width: "100%",
            height: "100%",

            // margin: "0 auto",
          }}
        />
        {/* <SocialDiv> */}
        {/* <div className=" transform -translate-x-1/2 -translate-y-1/2 text-shadow"> */}
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
        {/* </SocialDiv> */}
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
