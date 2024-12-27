import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import { FaCode, FaLaptopCode, FaGlobe, FaCalendarAlt } from "react-icons/fa";

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
  font-variant: small-caps;

  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  width: 100%;

  font-variant: small-caps;

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
  width: 250px;

  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
  @media (max-width: 769px) {
    width: 95%;
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

const CompanyHighlights = () => {
  return (
    <HighlightsSection>
      <Title>Our Strengths That Set Us Apart</Title>
      <Subtitle>The Most Reliable Software Development Team</Subtitle>
      <HighlightsGrid>
        <HighlightCard>
          <IconWrapper>
            <FaCalendarAlt />
          </IconWrapper>
          <Number>
            <CountUp end={8} />+
          </Number>
          <Label>Years of Expertise</Label>
        </HighlightCard>
        <HighlightCard>
          <IconWrapper>
            <FaLaptopCode />
          </IconWrapper>
          <Number>
            <CountUp end={200} />+
          </Number>
          <Label>Successful Projects</Label>
        </HighlightCard>
        <HighlightCard>
          <IconWrapper>
            <FaCode />
          </IconWrapper>
          <Number>
            <CountUp end={50} />+
          </Number>
          <Label>Skilled Developers</Label>
        </HighlightCard>
        <HighlightCard>
          <IconWrapper>
            <FaGlobe />
          </IconWrapper>
          <Number>
            <CountUp end={20} />+
          </Number>
          <Label>Countries Served</Label>
        </HighlightCard>
      </HighlightsGrid>
    </HighlightsSection>
  );
};

export default CompanyHighlights;
