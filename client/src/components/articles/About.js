import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Link } from "react-router-dom";
import About_framer from "./About_framer";

const About = () => {
  const Div = styled.div`
    background: linear-gradient(
      135deg,
      rgb(46, 46, 240) 0%,
      rgb(74, 140, 255) 100%
    );
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Div2 = styled.div`
    width: 50%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 23px;
    margin: 0 0 12px;

    @media (max-width: 769px) {
      width: 100%;
      padding: 20px;
    }
  `;
  const MissionTextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 43px 0 43px 0;
    border-top: 1px solid rgb(0, 195, 255);

    @media (max-width: 769px) {
      padding: 0 1px;
      flex-direction: column;
      align-items: center;
    }
  `;

  const MissionTextImgDiv = styled.div`
    width: 30%;
    height: 390px;
    padding-top: 133px;
    align-items: center;

    @media (max-width: 769px) {
      width: 210px;

      padding-top: 130px;
    }
  `;

  const H1 = styled.h2`
    padding: 30px 0 0;
    font-variant: small-caps;
    font-size: 40px;
    color: white;
  `;

  const P = styled.h6`
    font-size: 20px;
    // font-variant: small-caps;
    font-family: "Arial", sans-serif;
    font-weight: 400px;
    color: white;
    @media (max-width: 769px) {
      font-size: 18px;
      width: 100%;
      padding: 0 1px;
    }
  `;
  const Div3 = styled.div`
    width: 100%;
  `;
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    speed: 2000,
    className: "center",
    centerMode: true,
    centerPadding: "-17px",
  };
  const Div4 = styled.div`
    // padding: 5px;
    width: 500px;
    height: 500px;
    border-radius: 10px;
    @media (max-width: 769px) {
      height: 350px;
      padding: 1px;
    }
  `;
  const Img = styled.img`
    width: 95%;
    height: 90%;
    border-radius: 5px;

    transition: all 0.3s linear;
    &:hover {
      transform: scale(1.02);
    }
  `;

  const Div5 = styled.div``;

  return (
    <Div>
      <H1>What We Do</H1>

      <MissionTextWrapper>
        <Div2>
          <P>
            <p style={{ color: "rgb(0, 195, 255)", fontVariant: "small-caps" }}>
              WE'RE A SOFTWARE DEVELOPER TEAM
            </p>
            Dedicated and innovative Software experience in designing,
            developing, and managing complex web applications and sites.
            Proficient in front-end and back-end development, including HTML,
            CSS, JavaScript, and modern frameworks such as React and Node.js
            Adept at creating responsive, user-friendly interfaces and
            optimizing web performance. Skilled in collaborating with
            cross-functional teams to deliver high-quality digital solutions
            that enhance user experience and drive business growth.
          </P>
        </Div2>
        <MissionTextImgDiv>
          <About_framer />
        </MissionTextImgDiv>
      </MissionTextWrapper>

      <Div3 className="slider-container">
        <Slider {...settings}>
          <Div4>
            <Link to="/artists">
              <Img
                src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1736662184/about4_ovhkr0.jpg"
                loading="lazy"
                alt="img"
              />
            </Link>
          </Div4>
          <Div4>
            <Link to="/artists">
              <Img
                src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1736662182/about6_t7sqcl.jpg"
                loading="lazy"
                alt="img"
              />
            </Link>
          </Div4>
          <Div4>
            <Link to="/artists">
              <Img
                src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1736662182/about1_du5jbv.jpg"
                loading="lazy"
                alt="img"
              />
            </Link>
          </Div4>
          <Div4>
            <Link to="/artists">
              <Img
                src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1736662180/about2_sshzqd.jpg"
                loading="lazy"
                alt="img"
              />
            </Link>
          </Div4>{" "}
          <Div4>
            <Link to="/artists">
              <Img
                src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1736662179/about3_fxzk82.jpg"
                loading="lazy"
                alt="img"
              />
            </Link>
          </Div4>{" "}
          <Div4>
            <Link to="/artists">
              <Img
                src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1736662181/about5_xsajo9.jpg"
                loading="lazy"
                alt="img"
              />
            </Link>
          </Div4>
        </Slider>
      </Div3>
    </Div>
  );
};

export default About;
