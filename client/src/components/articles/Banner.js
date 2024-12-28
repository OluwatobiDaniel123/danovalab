import React from "react";
import Slider from "react-slick";
import img1 from "../../../src/assets/slide6.jpg";
import img2 from "../../../src/assets/slide5.jpg";
import img3 from "../../../src/assets/slide11.png";
import styled from "styled-components";
import { keyframes } from "styled-components";

function Fade() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  const Image = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
  `;

  const Div = styled.div`
    width: 100%;
    height: 100vh;
  `;

  const TextContainer = styled.div`
    padding: 125px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 769px) {
      padding: 13rem 0 0 0;
    }
  `;

  const dropAnimation = keyframes`
  0% {
    transform: translateY(-100px); 
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1; 
  }
`;

  const Text = styled.h2`
    position: absolute;
    font-size: 70px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(0deg, rgb(0, 195, 255));
    -webkit-background-clip: text;
    color: rgb(0, 195, 255);
    animation: ${dropAnimation} 3s ease-in forwards;
    @media (max-width: 769px) {
      font-size: 50px;
    }
  `;

  const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

  const Small = styled.p`
    font-size: 18px;
    text-algn: center;
    font-weight: bold;
    margin: 110px 0 19px 0;
    text-align: center;
    font-variant: small-caps;

    background: linear-gradient(0deg, rgb(0, 195, 255));
    -webkit-background-clip: text;
    color: rgb(0, 195, 255);
    animation: ${fadeIn} 3s ease-in forwards;
    @media (max-width: 769px) {
      font-size: 18px;
      width: 90%;
    }
  `;

  const text = [
    {
      text: "DANOVALAB 1",
      subtext:
        "Whether you’re a rising star or an established performer, XTiiM is here to amplify your voice and help your music reach audiences far and wide. Together, let’s turn dreams into unforgettable soundtracks.",
    },
    {
      text1: "DANOVALAB 2",
      subtext1:
        "Whether you’re a rising star or an established performer, XTiiM is here to amplify your voice and help your music reach audiences far and wide. Together, let’s turn dreams into unforgettable soundtracks.",
    },
    {
      text2: "DANOVALAB 3",
      subtext2:
        "Whether you’re a rising star or an established performer, XTiiM is here to amplify your voice and help your music reach audiences far and wide. Together, let’s turn dreams into unforgettable soundtracks.",
    },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <Div>
          <Image src={img1} alt="img" />
          <TextContainer>
            <Text> {text[0].text} </Text>
            <Small>{text[0].subtext}</Small>
          </TextContainer>
        </Div>
        <Div>
          <Image src={img2} alt="img" />
          <TextContainer>
            <Text> {text[1].text1} </Text>
            <Small>{text[1].subtext1}</Small>
          </TextContainer>
        </Div>
        <Div>
          <Image src={img3} alt="img" />
          <TextContainer>
            <Text>{text[2].text2}</Text>
            <Small>{text[2].subtext2}</Small>
          </TextContainer>
        </Div>
      </Slider>
    </div>
  );
}

export default Fade;
