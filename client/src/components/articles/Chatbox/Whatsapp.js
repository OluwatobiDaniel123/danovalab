import { FaWhatsapp } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const TooltipContainer = styled.div`
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 1000;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  &:hover span {
    opacity: 1;
    transform: translateY(-10px);
  }
`;

const WattDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  animation: ${bounce} 2s infinite;

  box-shadow: 0px 4px 10px rgba(0, 128, 0, 0.6);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 4px 20px rgba(0, 255, 0, 0.8);
  }
`;

const Whatsapp = () => {
  const HandleClick = () => {
    window.open(
      "https://wa.me/2348109830746?text=Hello%20DanovaLab%2C%20I'm%20interested%20in%20your%20software%20development%20services.%20Please%20get%20back%20to%20me.%20Thank%20you!"
    );
  };

  return (
    <TooltipContainer onClick={HandleClick}>
      <WattDiv>
        <FaWhatsapp />
      </WattDiv>
    </TooltipContainer>
  );
};

export default Whatsapp;
