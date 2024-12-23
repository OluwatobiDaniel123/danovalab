import React from "react";
import CardItem from "./CardItem";
import img1 from "../../assets/slide18.jpg";
import slide10 from "../../assets/slide10.png";
import styled from "styled-components";

function Cards() {
  const Cards = styled.div`
    padding: 3rem 0;
    // background-image: url(${slide10});
    // background-size: cover;
    // background-position: center;
  `;
  const H1 = styled.h1`
    text-align: center;
    background: linear-gradient(0deg, #4caf50, #92781a, #a3c651);
    -webkit-background-clip: text;
    color: transparent;
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
    grid-template-columns: repeat(4, 1fr);
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
              text="Explore MELIQ.101 music journey through t"
              paragraph="Music is  life,’ says MELIQ.101. ‘I want every beat and lyric to resonate with my fans and connect on a deeper level."
              label="MELIQ.101"
              path="/artists"
            />
            <CardItem
              src={slide10}
              text="Explore MELIQ.101 music journey thr ujh"
              paragraph="Music is  life,’ says MELIQ.101. ‘I want every beat and lyric to resonate with my fans and connect on a deeper level."
              label="MELIQ.101"
              path="/artists"
            />{" "}
            <CardItem
              src={slide10}
              text="Explore MELIQ.101 music journey thr ujh"
              paragraph="Music is  life,’ says MELIQ.101. ‘I want every beat and lyric to resonate with my fans and connect on a deeper level."
              label="MELIQ.101"
              path="/artists"
            />{" "}
            <CardItem
              src={slide10}
              text="Explore MELIQ.101 music journey thr ujh"
              paragraph="Music is  life,’ says MELIQ.101. ‘I want every beat and lyric to resonate with my fans and connect on a deeper level."
              label="MELIQ.101"
              path="/artists"
            />{" "}
            <CardItem
              src={slide10}
              text="Explore MELIQ.101 music journey thr ujh"
              paragraph="Music is  life,’ says MELIQ.101. ‘I want every beat and lyric to resonate with my fans and connect on a deeper level."
              label="MELIQ.101"
              path="/artists"
            />{" "}
            <CardItem
              src={slide10}
              text="Explore MELIQ.101 music journey thr ujh"
              paragraph="Music is  life,’ says MELIQ.101. ‘I want every beat and lyric to resonate with my fans and connect on a deeper level."
              label="MELIQ.101"
              path="/artists"
            />{" "}
            <CardItem
              src={slide10}
              text="Explore MELIQ.101 music journey thr ujh"
              paragraph="Music is  life,’ says MELIQ.101. ‘I want every beat and lyric to resonate with my fans and connect on a deeper level."
              label="MELIQ.101"
              path="/artists"
            />{" "}
            <CardItem
              src={slide10}
              text="Explore MELIQ.101 music journey thr ujh"
              paragraph="Music is  life,’ says MELIQ.101. ‘I want every beat and lyric to resonate with my fans and connect on a deeper level."
              label="MELIQ.101"
              path="/artists"
            />
          </Ul>
        </Container2>
      </Container>
    </Cards>
  );
}

export default Cards;
