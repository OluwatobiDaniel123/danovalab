// RequestQuote.js
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
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
  display: block;
  margin: 5px 0;
`;

const BudgetContainer = styled.div`
  margin: 10px 0;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    businessName: "",
    websiteUrl: "",
    helpWith: [],
    comments: "",
    budget: "",
    referral: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission (e.g., send to API)
  };

  return (
    <Container>
      <Title>Request a Quote</Title>
      <form onSubmit={handleSubmit}>
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
        <Input
          type="text"
          name="businessName"
          placeholder="Business Name"
          value={formData.businessName}
          onChange={handleChange}
        />
        <Input
          type="url"
          name="websiteUrl"
          placeholder="Website URL (if any)"
          value={formData.websiteUrl}
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
            "Social & Digital Marketing",
            "I need help with Website Maintenance and Hosting",
            "Mobile & Web Apps",
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

        <Input
          type="text"
          name="referral"
          placeholder="How did you hear from us?"
          value={formData.referral}
          onChange={handleChange}
        />

        <Button type="submit">GET FREE QUOTE</Button>
      </form>
    </Container>
  );
};

export default RequestQuote;
