import React from "react";
import CardItem from "./CardItem";
import img1 from "../../assets/port1.png";
import slide10 from "../../assets/port4.png";
import styled from "styled-components";

function Cards() {
  const Cards = styled.div`
    padding: 3rem 0;
  `;
  const H1 = styled.h1`
    text-align: center;

    color: black;
  `;
  const Container = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 90%;

    margin: 0 auto;
  `;
  const Container2 = styled.div`
    position: relative;
    margin: 50px 0 45px;
  `;
  const Ul = styled.div`
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
    // margin-bottom: 0px;
    @media (max-width: 1040px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  `;
  return (
    <Cards>
      <H1>Our Portfolio</H1>
      <Container>
        <Container2>
          <Ul>
            <CardItem
              src={img1}
              text="E-commerce wine store application"
              paragraph="Developed a fully functional e-commerce platform to enhance online sales and customer experience.React, Node.js, Express, MongoDB, Stripe API"
              label="FULLSTACK"
              path="/artists"
            />
            <CardItem
              src={slide10}
              text="Social media web application"
              paragraph="Created a social media application to connect users and enable content sharing. Tech us include: React, Redux-Toolkit, Node.js, Express, MongoDB"
              label="FULLSTACK"
              path="/artists"
            />{" "}
            <CardItem
              src={slide10}
              text="Explore MELIQ.101 music journey thr ujh"
              paragraph="Developed a feature-rich to-do list application to help users manage tasks and boost productivity.React, Redux, Node.js, Express, MongoDB"
              label="FULLSTACK"
              path="/artists"
            />{" "}
            <CardItem
              src={slide10}
              text="Explore FULLSTACK music journey thr ujh"
              paragraph="Developed an online banking with expense tracker application to help users manage and track their daily expenses.React, Redux, Node.js, Express, MongoDB"
              label="FULLSTACK"
              path="/artists"
            />{" "}
            <CardItem
              src={slide10}
              text="Explore FULLSTACK music journey thr ujh"
              paragraph="Created a note-taking application to enable users to create, organize, and manage their notes efficiently.React, Redux, Node.js, Express, MongoDB"
              label="FULLSTACK"
              path="/artists"
            />{" "}
            <CardItem
              src={slide10}
              text="Explore FULLSTACK music journey thr ujh"
              paragraph="Created a note-taking application to enable users to create, organize, and manage their notes efficiently.React, Redux, Node.js, Express, MongoDB"
              label="FULLSTACK"
              path="/artists"
            />{" "}
          </Ul>
        </Container2>
      </Container>
    </Cards>
  );
}

export default Cards;
