import React from "react";
import Slider from "react-slick";
import img1 from "../../../src/assets/banner1.jpg";
import img2 from "../../../src/assets/banner2.jpg";
import img3 from "../../../src/assets/banner3.jpg";
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
    height: 130vh;
    position: absolute;
    @media (max-width: 769px) {
      object-fit: cover;
    }
  `;

  const Div = styled.div`
    width: 100%;
    height: 100vh;
  `;

  const TextContainer = styled.div`
    padding: 125px;
    display: flex;
    flex-direction: column;
    @media (max-width: 769px) {
      padding: 13rem 0 0 0;
    }
  `;

  const Text = styled.h2`
    position: relative;
    font-size: 80px;
    padding-bottom: 20px;
    font-weight: bold;
    font-family: "Arial", sans-serif;
    text-transform: uppercase;
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
    font-family: "Arial", sans-serif;
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
      text: "DANOVALAB",
      subtext:
        " Welcome to DANOVALAB, the collective showcase of our software development team. We are a group of passionate developers dedicated to creating innovative and user-friendly web applications. ",
    },
    {
      text1: "DANOVALAB",
      subtext1:
        " Welcome to DANOVALAB, the collective showcase of our software development team. We are a group of passionate developers dedicated to creating innovative and user-friendly web applications. ",
    },
    {
      text2: "DANOVALAB",
      subtext2:
        " Welcome to DANOVALAB, the collective showcase of our software development team. We are a group of passionate developers dedicated to creating innovative and user-friendly web applications. ",
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
