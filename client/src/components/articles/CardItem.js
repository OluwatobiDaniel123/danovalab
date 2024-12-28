import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardsLink = styled(Link)`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 320px;
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  border-radius: 5px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const CardsItemPicWrap = styled.figure`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;

  &::after {
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    max-width: calc(100% - 60px);
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    background-color: #1f98f4;
    box-sizing: border-box;
  }
`;

const CardsItemImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`;

const CardsItemInfo = styled.div`
  padding: 8px 9px 2px;
`;

const CardsItemText = styled.h5`
  color: #1f98f4;

  font-size: 16px;
`;

const CardsItemParagraph = styled.p`
  color: #1f98f4;
  font-size: 13px;
  padding: 4px 0;
  font-weight: 300;
`;

function CardItem(props) {
  return (
    <CardsLink to={props.path}>
      <CardsItemPicWrap data-category={props.label}>
        <CardsItemImg src={props.src} alt="Img" />
      </CardsItemPicWrap>
      <CardsItemInfo>
        <CardsItemText>{props.text}</CardsItemText>
        <CardsItemParagraph>{props.paragraph}</CardsItemParagraph>
      </CardsItemInfo>
    </CardsLink>
  );
}

export default CardItem;
