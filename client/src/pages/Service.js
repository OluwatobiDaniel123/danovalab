import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaGlobe,
  FaTools,
} from "react-icons/fa";

import "./Service.css";

const ServiceContainer = styled.section`
  padding: 40px 5px 20px 5px;
  background: linear-gradient(135deg, #f7f9fc, #eef2f7);
  text-align: center;
`;

const ServiceHeader = styled.h2`
  margin-bottom: 20px;
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-family: "Poppins", sans-serif;
  color: #333;
  border-bottom: 4px solid #00c6ff;
  display: inline-block;
  padding-bottom: 8px;
  text-transform: uppercase;
`;

const Subheader = styled.p`
  margin-bottom: 40px;
  font-size: 1.2rem;
  color: #555;
  font-family: "Poppins", sans-serif;
`;

const ServiceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 20px;
`;

const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border: 2px solid #ddd;
  border-radius: 12px;
  padding: 30px;
  width: clamp(350px, 30%, 300px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s, box-shadow 0.4s;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
    border-color: #00c6ff;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #00c6ff;
  margin-bottom: 15px;
`;

const ServiceName = styled.h3`
  font-size: 1.3rem;
  color: #007bff;
  margin-bottom: 15px;
  font-weight: bold;
  text-transform: uppercase;
`;

const Badge = styled.span`
  display: inline-block;
  margin-left: 10px;
  padding: 2px 8px;
  font-size: 0.8rem;
  background: #ff9f43;
  color: white;
  border-radius: 12px;
  font-weight: bold;
`;

const ServiceDescription = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  margin-top: 40px;
  padding: 12px 24px;
  background: #00c6ff;
  color: white;
  font-size: 1.1rem;
  font-family: "Poppins", sans-serif;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background: #007bff;
  }
`;

const Services = [
  {
    name: "Software Development",
    description: "Custom software solutions tailored to your business needs.",
    icon: <FaCode />,
    badge: "Popular",
  },
  {
    name: "Front-End Development",
    description: "Building responsive and user-friendly interfaces.",
    icon: <FaLaptopCode />,
  },
  {
    name: "Back-End Development",
    description: "Creating robust server-side applications and APIs.",
    icon: <FaServer />,
    badge: "Popular",
  },
  {
    name: "Web Development",
    description: "Full-stack web development services for dynamic websites.",
    icon: <FaGlobe />,
  },
  {
    name: "Maintainability",
    description: "Ensuring your software is easy to maintain and update.",
    icon: <FaTools />,
    badge: "Popular",
  },
];

const Span = styled.span`
  font-size: 12px;

  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

const ServicePage = () => {
  return (
    <ServiceContainer>
      <ServiceHeader>Our Services</ServiceHeader>
      <Subheader>
        We offer a range of professional services to help your business thrive
        in the digital age.
      </Subheader>
      <div className="duke-family-section">
        <div className="particles">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
              }}
            />
          ))}
        </div>
        <div className="circle-container">
          <div className="member-circle center">
            <span>Danovalab</span>
            <Span>A Hub of Software Ingenuity! </Span>
          </div>
          <div className="member-circle pos-1">
            <span className="member-name">Web</span>
            <span className="member-surname">Maintenance</span>
          </div>

          <div className="member-circle pos-2">
            <span className="member-name">Frontend</span>
            <span className="member-surname">Dev</span>
          </div>
          <div className="member-circle pos-3">
            <span className="member-name">Backend</span>
            <span className="member-surname">Dev</span>
          </div>
          <div className="member-circle pos-4">
            <span className="member-name">Redesign</span>
            <span className="member-surname">Web</span>
          </div>
          <div className="member-circle pos-5">
            <span className="member-name">Inventory</span>
            <span className="member-surname">Dev</span>
          </div>
          <div className="member-circle pos-6">
            <span className="member-name">Investment</span>
            <span className="member-surname">Dev</span>
          </div>
          <div className="member-circle pos-7">
            <span className="member-name">Websites</span>
            <span className="member-surname">SEO</span>
          </div>
          <div className="member-circle pos-8">
            <span className="member-name">Software</span>
            <span className="member-surname">Dev</span>
          </div>
        </div>
      </div>
      <ServiceList>
        {Services.map((service, index) => (
          <ServiceItem key={index}>
            <IconWrapper>{service.icon}</IconWrapper>
            <ServiceName>
              {service.name}
              {service.badge && <Badge>{service.badge}</Badge>}
            </ServiceName>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceItem>
        ))}
      </ServiceList>
      <CTAButton to="/Contact">Get in Touch</CTAButton>
    </ServiceContainer>
  );
};

export default ServicePage;
