import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import emailjs from "emailjs-com";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(
    135deg,
    rgb(46, 46, 240) 0%,
    rgb(74, 140, 255) 100%
  );
  padding: 30px 15px;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 15px;
  border-radius: 7px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;

  h2 {
    font-variant: small-caps;
    font-size: 30px;
    color: black;
    border-bottom: 2px solid rgb(0, 195, 255);
    margin-bottom: 1rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1.3px;
    border-radius: 0.5rem;
    background: #f9f9f9;
    border: 2px solid lightblue;
    resize: none;
    color: black;

    &:hover {
      border-color: rgb(0, 195, 255);
    }

    transition: all 0.3s ease-in-out;
  }
`;

const ContactButton = styled.button`
  background: linear-gradient(45deg, #007bff, #00d4ff);

  color: white;
  font-weight: bold;
  padding: 10px 15px;
  width: 70%;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  border: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background: grey;
    cursor: not-allowed;
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const StyledAlert = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${(props) =>
    props.type === "success" ? "#d4edda" : "#f8d7da"};
  color: ${(props) => (props.type === "success" ? "#155724" : "#721c24")};
  border: 1px solid
    ${(props) => (props.type === "success" ? "#c3e6cb" : "#f5c6cb")};
  border-radius: 5px;
  padding: 0.6rem 0.6rem;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${(props) => (props.animateOut ? slideOut : slideIn)} 0.5s ease;
  z-index: 1000;

  svg {
    margin-right: 10px;
    font-size: 1.5rem;
  }

  button {
    background: none;
    border: none;
    color: ${(props) => (props.type === "success" ? "#155724" : "#721c24")};
    font-size: 1.9rem;
    margin-left: 15px;
    cursor: pointer;
  }
`;

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [animateOut, setAnimateOut] = useState(false);
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_qh08omd",
        "template_icla7gq",
        form.current,
        "uDj1nlX9BVEqunnYs"
      );
      console.log(result.text);

      setAlertMessage({
        type: "success",
        message: "Message sent successfully!",
      });
      form.current.reset();
    } catch (error) {
      console.error(error.text);
      setLoading(false);
      setAlertMessage({ type: "error", message: "Failed to send message" });
    } finally {
      setLoading(false);

      setTimeout(() => {
        // setAnimateOut(true);
        setTimeout(() => setAlertMessage(null), 300);
      }, 3000);
    }
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
            maxWidth: "500px",
            height: "auto",
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

          <ContactButton type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </ContactButton>
        </ContactForm>
        {alertMessage && (
          <StyledAlert type={alertMessage.type} animateOut={animateOut}>
            {alertMessage.type === "success" ? (
              <FaCheckCircle />
            ) : (
              <FaTimesCircle />
            )}
            {alertMessage.message}
            <button onClick={() => setAlertMessage(null)}>&times;</button>
          </StyledAlert>
        )}
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
