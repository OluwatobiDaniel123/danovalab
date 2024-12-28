import React from "react";
import Slider from "react-slick";
import img1 from "../../../src/assets/slide6.jpg";
import img2 from "../../../src/assets/slide5.jpg";
import img3 from "../../../src/assets/slide11.png";
import styled from "styled-components";

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

  const Text = styled.h2`
    position: relative;
    font-size: 80px;
    padding-bottom: 20px;
    font-weight: bold;
    font-family: "Playfair Display", serif;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 4px;
    background: linear-gradient(45deg, #0055ff, #00b4ff, #0095ff, #001eff);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 6s ease infinite, fadeIn 2.5s ease forwards;

    @media (max-width: 769px) {
      font-size: 60px;
    }

    @media (max-width: 480px) {
      font-size: 40px;
    }

    @keyframes gradientShift {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(-30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  const Small = styled.p`
    position: relative;
    font-size: 18px;
    font-weight: bold;
    font-family: "Playfair Display", serif;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 4px;
    background: linear-gradient(45deg, #0055ff, #00b4ff, #0095ff, #001eff);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 6s ease infinite, fadeIn 2.5s ease forwards;

    @keyframes gradientShift {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(-30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
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
