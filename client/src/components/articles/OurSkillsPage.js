import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 20px;
  font-family: "Arial", sans-serif;
  background: linear-gradient(
    135deg,
    rgb(46, 46, 240) 0%,
    rgb(74, 140, 255) 100%
  );
  color: white;
`;

const Section = styled.div`
  margin: 40px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: #0055ff;
`;

const SectionContent = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: black;
`;

const OurSkillsPage = () => {
  return (
    <PageContainer>
      <h1
        style={{
          fontVariant: "small-caps",
          textAlign: "center",
          borderBottom: "1px solid rgb(0, 195, 255)",
        }}
      >
        Our Philosophy and Goals
      </h1>
      <Section>
        <SectionTitle>Design Philosophy</SectionTitle>
        <SectionContent>
          We believe in creating intuitive and visually appealing interfaces.
          Our design choices focus on enhancing user engagement through
          thoughtful use of color, typography, and animations.
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Collaboration</SectionTitle>
        <SectionContent>
          We thrive on collaboration, working closely with designers,
          developers, and stakeholders to bring projects to life. Our effective
          communication ensures that we can contribute meaningfully to group
          efforts.
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Challenges and Solutions</SectionTitle>
        <SectionContent>
          Throughout our projects, we have encountered various challenges, such
          as ensuring cross-browser compatibility and optimizing performance. We
          approach these challenges with a problem-solving mindset, leveraging
          best practices and modern tools.
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Future Goals</SectionTitle>
        <SectionContent>
          As a team, we are committed to continuous learning and staying updated
          with industry trends. Our goal is to work on innovative projects that
          push the boundaries of web development and deliver exceptional value
          to our clients.
        </SectionContent>
      </Section>
    </PageContainer>
  );
};

export default OurSkillsPage;
