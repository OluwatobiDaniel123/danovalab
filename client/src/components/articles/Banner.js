import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Hero Component
const Hero = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>DANOVALAB</HeroTitle>
        <HeroDescription>
          Welcome to DANOVALAB — A Hub of Software Ingenuity! Bringing
          futuristic tech solutions to streamline your business growth.
        </HeroDescription>
        <CallToAction href="#contact">Get in Touch</CallToAction>
        <ProgressBar>
          <Progress width={progress} />
        </ProgressBar>
      </HeroContent>
      <TechIllustration />
      <Particles />
      <ServiceCards />
      <FloatingSpheres />
      <ScrollIndicator />
    </HeroSection>
  );
};

export default Hero;

// Styled Components with Additional Features

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #00c6ff, #0072ff);
  animation: gradientAnimation 5s ease infinite;
  color: white;
  padding: 0 20px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  transition: background 0.5s ease;
  cursor: pointer;
  box-sizing: border-box;

  @keyframes gradientAnimation {
    0% {
      background: linear-gradient(135deg, #00c6ff, #0072ff);
    }
    50% {
      background: linear-gradient(135deg, #ff4b5c, #00c6ff);
    }
    100% {
      background: linear-gradient(135deg, #0072ff, #00c6ff);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  margin: 0 40px;
  z-index: 2;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: fadeIn 2s ease-out;
  transform: translateY(100px);
  opacity: 0;
  animation: fadeIn 2s ease-out forwards;

  @keyframes fadeIn {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

// const HeroTitle = styled.h1`
//   font-size: 4rem;
//   font-family: "Poppins", sans-serif;
//   font-weight: 700;
//   letter-spacing: 4px;
//   margin-bottom: 20px;
//   text-transform: uppercase;
//   line-height: 1.2;
//   color: white;
//   text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
//   transition: transform 0.3s ease, color 0.3s ease;
//   white-space: nowrap;
//   overflow: hidden;
//   border-right: 4px solid rgba(255, 255, 255, 0.75);
//   width: 0;
//   animation: typing 4s steps(30) forwards;

//   @keyframes typing {
//     100% {
//       width: 100%;
//     }
//   }

//   &:hover {
//     transform: scale(1.05);
//     color: #ff4b5c;
//   }

//   @media (max-width: 768px) {
//     font-size: 2.8rem;
//   }
// `;
const HeroTitle = styled.h1`
  font-size: 4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  letter-spacing: 4px;
  margin-bottom: 20px;
  text-transform: uppercase;
  line-height: 1.2;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, color 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  border-right: 4px solid rgba(255, 255, 255, 0.75);
  width: 0;
  animation: typing 4s steps(30) forwards; /* Increased duration and steps */

  @keyframes typing {
    100% {
      width: 100%;
    }
  }

  &:hover {
    transform: scale(1.05);
    color: #ff4b5c;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.4rem;
  margin-bottom: 30px;
  font-family: "Arial", sans-serif;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.03);
    color: #ff4b5c;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CallToAction = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: #ff4b5c;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  border: 2px solid #ff4b5c;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #ff0066;
    transform: scale(1.05);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: ripple 0.6s ease-out forwards;
  }

  @keyframes ripple {
    to {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px 25px;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #f1f1f1;
  border-radius: 10px;
  margin-top: 30px;
`;

const Progress = styled.div`
  height: 100%;
  width: ${({ width }) => width}%;
  background-color: #ff4b5c;
  border-radius: 10px;
  transition: width 0.5s ease;
`;

const TechIllustration = styled.div`
  position: absolute;
  right: -50px;
  top: 30px;
  width: 300px;
  height: 300px;
  background: url("https://via.placeholder.com/300.png?text=Tech") center/cover
    no-repeat;
  border-radius: 50%;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
  animation: float 4s ease-in-out infinite;

  @media (max-width: 768px) {
    position: relative;
    width: 180px;
    height: 180px;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

// Floating Particles Effect
const Particles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("https://www.transparenttextures.com/patterns/dark-matter.png");
  opacity: 0.1;
  pointer-events: none;
  animation: floatParticles 10s infinite linear;

  @keyframes floatParticles {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;

// Service Cards (Interactive Hover Effect)
// const ServiceCards = styled.div`
//   position: absolute;
//   bottom: 20px;
//   left: 50%;
//   transform: translateX(-50%);
//   display: flex;
//   gap: 20px;

//   @media (max-width: 768px) {
//     bottom: 10px;
//   }
// `;
const ServiceCards = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  animation: fadeInCards 5s ease-out 5s forwards; /* Delayed animation */

  @keyframes fadeInCards {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    bottom: 10px;
  }
`;

const ServiceCard = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  width: 250px;
  height: 300px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
  }

  h3 {
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    line-height: 1.4;
  }
`;

const FloatingSpheres = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
  animation: floatingSpheres 4s ease-in-out infinite;

  @keyframes floatingSpheres {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00c6ff, #0072ff);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  animation: bounce 1s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

export { ServiceCard };
