import React from "react";
import img1 from "../../assets/slide18.jpg";
import slide10 from "../../assets/slide10.png";
import { keyframes } from "styled-components";
import styled from "styled-components";
import { useState, useEffect } from "react";

function Artists() {
  const [videos, setVideos] = useState([]);
  const channelId = "UCB79ehpMBins1Uf9eVRb0Mg";

  const Artists = styled.div`
    padding: 3rem 0;
    // background-image: url(${slide10});
    // background-size: cover;
    // background-position: center;
  `;
  const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
  const H1 = styled.h1`
    text-align: center;
    background: linear-gradient(0deg, #4caf50, #92781a, #a3c651);
    -webkit-background-clip: text;
    color: transparent;
    animation: ${fadeIn} 3s ease-in forwards;
  `;
  const Container = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 0 auto;
  `;
  const Container2 = styled.div`
    position: relative;
    margin: 50px 0 45px;
  `;

  const CardsItemPicWrap = styled.figure`
    position: relative;
    width: 100%;
    height: 600px;
    padding-top: 67%;
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
    padding: 22px 33px 23px;
    background: #201f1f;
  `;

  const CardsItemText = styled.h5`
    color: white;
    font-size: 18px;
    background: linear-gradient(0deg, #4caf50, #ffdb58, #a3c651);
    -webkit-background-clip: text;
    color: transparent;
    &:hover {
      color: #4caf50;
    }
  `;

  const CardsItemParagraph = styled.p`
    background: linear-gradient(90deg, #4caf50, #ffdb58, #a3c651);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 15px;
    padding: 10px 0;
    font-weight: 300;
  `;

  const CardsVideo = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
    }
  `;

  const Video = styled.div`
    width: 100%;
    padding: 10px;
    transition: all 0.3s linear;
    &:hover {
      transform: scale(1.03);
    }
  `;

  useEffect(() => {
    const fetchVideos = async () => {
      const url = `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [channelId]);

  return (
    <Artists>
      <H1>MELIQ.101</H1>

      <Container>
        <Container2>
          <CardsItemPicWrap data-category="MELIQ.101">
            <CardsItemImg src={img1} alt="Img" />
          </CardsItemPicWrap>
          <CardsItemInfo>
            <CardsItemText>
              Explore MELIQ.101 music journey through their releases, from debut
              singles to their latest chart-topping album.
            </CardsItemText>
            <CardsItemParagraph>
              Music is more than sound; it’s the heartbeat of life,’ says
              MELIQ.101. ‘I want every beat and lyric to resonate with my fans
              and connect on a deeper level." "Music is more than sound; it’s
              the heartbeat of life,’ says MELIQ.101. ‘I want every beat and
              lyric to resonate with my fans and connect on a deeper level.
            </CardsItemParagraph>
            <CardsVideo>
              {videos.map((video) => {
                const videoId = video.link.split("=")[1]; // Extract the video ID from the URL
                return (
                  <Video key={videoId}>
                    <iframe
                      width="100%"
                      height="255"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={video.title}
                    ></iframe>
                    <CardsItemParagraph>{video.title}</CardsItemParagraph>
                  </Video>
                );
              })}
            </CardsVideo>
          </CardsItemInfo>
        </Container2>
      </Container>
    </Artists>
  );
}

export default Artists;
