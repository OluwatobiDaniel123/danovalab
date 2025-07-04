import React from "react";
import styled from "styled-components";
import { FaCode, FaReact, FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
const HighlightsSection = styled.section`
  text-align: center;
  padding: 50px;
  background-color: #f9f9f9;

  @media (max-width: 769px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  width: 100%;
  border-bottom: 1px solid rgb(0, 195, 255);

  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  width: 100%;
  color: #666;
  margin-bottom: 40px;
`;

const HighlightsGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const HighlightCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;

  &:hover {
    transform: translateY(-10px);
    // background-color: #007bff;
    transition: 0.4s ease;
  }

  @media (max-width: 769px) {
    width: 95%;
    padding: 10px;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #007bff;
  margin-bottom: 15px;
`;

const Number = styled.h3`
  font-size: 2rem;
  color: #333;
  margin: 10px 0;
`;

const Label = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Skills = () => {
  return (
    <HighlightsSection>
      <Title>Our Skills</Title>
      <Subtitle>Our team excels in the MERN stack, which include</Subtitle>
      <HighlightsGrid>
        <HighlightCard style={{ borderRadius: "150px 70px 10px" }}>
          <IconWrapper>
            <SiMongodb />
          </IconWrapper>
          <Number>MongoDB</Number>
          <Label>
            {" "}
            Proficient in using MongoDB for database management, allowing us to
            store and retrieve data efficiently with a flexible schema.
          </Label>
        </HighlightCard>
        <HighlightCard style={{ borderRadius: "70px 10px" }}>
          <IconWrapper>
            <FaCode />
          </IconWrapper>
          <Number>Express.js</Number>
          <Label>
            Experienced in building robust server-side applications using
            Express.js, enabling us to create RESTful APIs that serve our
            frontend applications.
          </Label>
        </HighlightCard>
        <HighlightCard style={{ borderRadius: "80px 150px 70px 10px" }}>
          <IconWrapper>
            <FaReact />
          </IconWrapper>
          <Number>React</Number>
          <Label>
            Skilled in developing dynamic and responsive user interfaces with
            React, leveraging component-based architecture for maintainability
            and scalability.
          </Label>
        </HighlightCard>
        <HighlightCard style={{ borderRadius: "100px 100px 10px 10px" }}>
          <IconWrapper>
            <FaNode />
          </IconWrapper>
          <Number>Node.js</Number>
          <Label>
            Knowledgeable in using Node.js for server-side development, allowing
            us to build fast and scalable network applications.
          </Label>
        </HighlightCard>
      </HighlightsGrid>
    </HighlightsSection>
  );
};

export default Skills;
