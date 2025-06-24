import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import emailjs from "emailjs-com";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Container = styled.div`
  padding: 40px;
  background: #f4f4f4;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
  color: #333;
  border-bottom: 2px solid rgb(0, 195, 255);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CheckboxContainer = styled.div`
  margin: 10px 0;
`;

const CheckboxLabel = styled.label`
  display: flex;
  gap: 10px;
  margin: 5px 0;
`;

const BudgetContainer = styled.div`
  margin: 10px 0;
`;

const Button = styled.button`
  background: linear-gradient(45deg, #007bff, #00d4ff);
  color: white;
  width: 100%;

  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
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
    props.type === "success" ? "#e3fcec" : "#ffe8e8"};
  color: ${(props) => (props.type === "success" ? "#2e7d32" : "#d32f2f")};
  border: 1px solid
    ${(props) => (props.type === "success" ? "#a5d6a7" : "#ef9a9a")};
  border-radius: 8px;
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: ${(props) => (props.animateOut ? slideOut : slideIn)} 0.5s ease;
  z-index: 1000;

  svg {
    margin-right: 10px;
    font-size: 1.5rem;
  }

  button {
    background: none;
    border: none;
    color: ${(props) => (props.type === "success" ? "#2e7d32" : "#d32f2f")};
    font-size: 1.5rem;
    margin-left: 15px;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    helpWith: [],
    comments: "",
    budget: "",
  });

  const form = useRef();
  const [loading, setLoading] = useState(false);

  const [alertMessage, setAlertMessage] = useState(null);
  const [animateOut, setAnimateOut] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        helpWith: checked
          ? [...prev.helpWith, value]
          : prev.helpWith.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      whatsapp: formData.whatsapp,
      helpWith: formData.helpWith.join(", "),
      comments: formData.comments,
      budget: formData.budget,
    };

    try {
      const result = await emailjs.send(
        "service_mtbnx3x",
        "template_knnul8n",
        templateParams,
        "uDj1nlX9BVEqunnYs"
      );
      console.log("Success:", result.text);

      setAlertMessage({ type: "success", message: "Quote sent successfully!" });
      setFormData({
        fullName: "",
        email: "",
        whatsapp: "",
        helpWith: [],
        comments: "",
        budget: "",
      });
    } catch (error) {
      console.error("Error:", error.text);
      setAlertMessage({ type: "error", message: "Failed to send Quote" });
    } finally {
      setLoading(false);
      setTimeout(() => setAlertMessage(null), 3000);
    }
  };

  return (
    <Container>
      <Title>Request a Quote</Title>
      <Form ref={form} onSubmit={handleSubmit}>
        <Input
          type="text"
          name="fullName"
          placeholder="Enter your Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          name="whatsapp"
          placeholder="WhatsApp Number"
          value={formData.whatsapp}
          onChange={handleChange}
        />

        <CheckboxContainer>
          <h4>What do you need help with?</h4>
          {[
            "I need a brand New Website",
            "I want to redesign my current website",
            "I want my website on Google First Page (SEO)",
            "I want to setup online store",
            "I want to run Google Ads & Google Shopping",
            "I need a new Logo Design",
            "Point of Sale Software",
            "Affiliate Marketing System",
            "Inventory Software",
            "Investment Website",
            "I need help with Website Maintenance and Hosting",
            "Other (Specify below)",
          ].map((item) => (
            <CheckboxLabel key={item}>
              <input
                type="checkbox"
                value={item}
                checked={formData.helpWith.includes(item)}
                onChange={handleChange}
              />
              {item}
            </CheckboxLabel>
          ))}
        </CheckboxContainer>

        <TextArea
          name="comments"
          placeholder="Comment other things you need help with"
          value={formData.comments}
          onChange={handleChange}
        />

        <BudgetContainer>
          <h4>Your Budget</h4>
          {[
            "$0 - $450",
            "$500 - $1,000",
            "$1,000 - $2,000",
            "$2,000 - $5,000",
            "$5,000 - $10,000",
            "$20,000 - $50,000",
            "Don't have a budget",
          ].map((item) => (
            <CheckboxLabel key={item}>
              <input
                type="radio"
                name="budget"
                value={item}
                checked={formData.budget === item}
                onChange={handleChange}
              />
              {item}
            </CheckboxLabel>
          ))}
        </BudgetContainer>

        <Button type="submit" disabled={loading}>
          {loading ? "Sending..." : " GET FREE QUOTE"}
        </Button>
      </Form>

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
    </Container>
  );
};

export default RequestQuote;
