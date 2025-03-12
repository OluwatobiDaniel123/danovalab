import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import emailjs from "emailjs-com";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin, FaMailBulk } from "react-icons/fa";

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  align-items: center;
  text-align: center;
  background: linear-gradient(120deg, #0d1117, #161b22);
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2rem;
  padding: 10px 0 10px 0;

  @media (max-width: 769px) {
    flex-direction: column;
    padding: 0;
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
  border: 1.5px solid rgb(0, 195, 255);

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

  @media (max-width: 768px) {
    border-radius: 0;
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

const Map = styled.iframe`
  border-radius: 5px;
  width: 100%;
  height: 450px;

  @media (max-width: 768px) {
    border-radius: 0;
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

      <Map
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63404.74982246983!2d3.4779139339393024!3d6.672074093347397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103be9403cda5b97%3A0x49c84a59cfa99d31!2sOdogunyan%2C%20Lagos!5e0!3m2!1sen!2sng!4v1739369697809!5m2!1sen!2sng"
        allowfullscreen
        loading="eager"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </ContactSection>
  );
};

export default Contact;
// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Mail, Phone, MapPin } from "lucide-react";
// import { motion } from "framer-motion";

// const ContactPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4">
//       <motion.h1
//         className="text-4xl font-bold text-center mb-10 text-gray-800"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Get in Touch with DanovaLab
//       </motion.h1>
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Contact Info */}
//         <Card className="shadow-lg">
//           <CardContent className="space-y-6 p-8">
//             <h2 className="text-2xl font-semibold text-gray-700">
//               Contact Information
//             </h2>
//             <div className="flex items-center gap-4">
//               <Mail className="text-blue-500" />
//               <p>contact@danovalab.com</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <Phone className="text-green-500" />
//               <p>+234 123 456 7890</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <MapPin className="text-red-500" />
//               <p>Lagos, Nigeria</p>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Contact Form */}
//         <Card className="shadow-lg">
//           <CardContent className="p-8">
//             <form className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Your Name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Your Email"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Subject"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Message
//                 </label>
//                 <textarea
//                   rows="4"
//                   className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Your Message"
//                 ></textarea>
//               </div>
//               <Button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white hover:bg-blue-700"
//               >
//                 Send Message
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;
