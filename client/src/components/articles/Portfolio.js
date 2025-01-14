import React from "react";
import styled from "styled-components";

const PortfolioContainer = styled.div`
  padding: 20px;
  background: linear-gradient(to right, #e0eafc, #cfdef3);
  text-align: center;
`;

const PortfolioTitle = styled.h2`
  //   font-size: 2.8em;
  //   margin-bottom: 40px;
  //   color: #333;
  //   font-weight: bold;
  font-size: 30px;
  width: 100%;
  font-variant: small-caps;
  border-bottom: 1px solid rgb(0, 195, 255);

  color: #333;
  margin-bottom: 10px;
`;

const PortfolioGrid = styled.div`
  display: flex;

  // grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PortfolioItem = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: white;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 4px solid #007bff;
  transition: transform 0.3s;

  ${PortfolioItem}:hover & {
    transform: scale(1.05);
  }
`;

const ItemTitle = styled.h3`
  margin: 20px 0 10px;
  font-size: 1.8em;
  color: #007bff;
  font-weight: bold;
`;

const ItemDescription = styled.p`
  margin: 0 15px 20px;
  color: #555;
  font-size: 1em;
`;

const ViewProjectButton = styled.a`
  display: inline-block;
  margin: 15px;
  padding: 12px 25px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

const Portfolio = () => {
  const projects = [
    {
      title: "e-commerce website",
      description:
        "An innovative solution that addresses key challenges in the industry.",
      image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1736662186/banner3_bzntym.jpg",
      link: "https://link_to_project_one.com",
    },
    {
      title: "Music record label website",
      description:
        "A cutting-edge application that enhances user experience and engagement.",
      image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1736662186/banner3_bzntym.jpg",
      link: "https://link_to_project_two.com",
    },
  ];

  return (
    <PortfolioContainer>
      rf
      <PortfolioTitle>Our Portfolio</PortfolioTitle>
      <PortfolioGrid>
        {projects.map((project, index) => (
          <PortfolioItem key={index}>
            <ItemImage src={project.image} alt={project.title} />
            <ItemTitle>{project.title}</ItemTitle>
            <ItemDescription>{project.description}</ItemDescription>
            <ViewProjectButton
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </ViewProjectButton>
          </PortfolioItem>
        ))}
      </PortfolioGrid>
    </PortfolioContainer>
  );
};

export default Portfolio;
