import React from "react";
import styled from "styled-components";

const ServiceContainer = styled.div`
  padding: 40px;
  background: #f4f4f4;
  text-align: center;
`;

const ServiceHeader = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
  color: #333;
  border-bottom: 2px solid rgb(0, 195, 255);
`;

const ServiceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ServiceItem = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 40px;
  margin: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceName = styled.h3`
  font-size: 20px;
  color: #007bff;
`;

const ServiceDescription = styled.p`
  color: #666;
`;

const Services = [
  {
    name: "Software Development",
    description: "Custom software solutions tailored to your business needs.",
  },
  {
    name: "Front-End Development",
    description: "Building responsive and user-friendly interfaces.",
  },
  {
    name: "Back-End Development",
    description: "Creating robust server-side applications and APIs.",
  },
  {
    name: "Web Development",
    description: "Full-stack web development services for dynamic websites.",
  },
  {
    name: "Maintainability",
    description: "Ensuring your software is easy to maintain and update.",
  },
];

const ServicePage = () => {
  return (
    <ServiceContainer>
      <ServiceHeader>Our Services</ServiceHeader>
      <ServiceList>
        {Services.map((service, index) => (
          <ServiceItem key={index}>
            <ServiceName>{service.name}</ServiceName>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceItem>
        ))}
      </ServiceList>
    </ServiceContainer>
  );
};

export default ServicePage;
