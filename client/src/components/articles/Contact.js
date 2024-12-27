import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
  background: rgb(0, 195, 255);
  color: white;
  font-weight: bold;
  padding: 10px 15px;
  width: 70%;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
    background: rgb(0, 170, 220);
  }

  &:disabled {
    background: grey;
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

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
      alert("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error(error.text);
      alert("Failed to send the message. Please try again.");
    } finally {
      setLoading(false);
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
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
