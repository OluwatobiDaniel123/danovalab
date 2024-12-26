import React from "react";
import Me1 from "../../assets/slide18.jpg";
import Me2 from "../../assets/slide18.jpg";
import Me3 from "../../assets/slide18.jpg";
import Me4 from "../../assets/slide18.jpg";
import Me5 from "../../assets/slide18.jpg";
import styled from "styled-components";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Me1,
    name: "Sarah Johnson, CEO of FreshStart Fitness",
    review:
      "Working with Oluwatobi Daniel on our new website was a fantastic experience. They understood our vision and brought it to life with a clean, user-friendly design that our clients love. The integration of our booking system was seamless, and we've seen a significant increase in online engagement. Highly professional and responsive throughout the project!",
  },
  {
    avatar: Me2,
    name: "Michael Brown, Founder of TravelBuddy",
    review:
      "I hired Oluwatobi Daniel to develop a mobile app for our travel startup, and the results exceeded my expectations. The app is intuitive, visually appealing, and packed with features that our users appreciate. The project was delivered on time and within budget. I highly recommend Oluwatobi Daniel for any development needs!",
  },
  {
    avatar: Me3,
    name: "Emily Davis, Marketing Manager at TechSolutions Inc.",
    review:
      "Oluwatobi Daniel was instrumental in redesigning our corporate website. They provided valuable insights into improving the user experience and implemented a modern design that aligns with our brand. Communication was excellent, and any issues were promptly addressed. The only minor downside was a slight delay due to unforeseen challenges, but overall, we are very satisfied with the outcome.",
  },
  {
    avatar: Me4,
    name: "John Smith, Owner of Gourmet Bistro",
    review:
      "We needed a reservation system for our restaurant, and Oluwatobi Daniel delivered a fantastic solution. The system is easy to use for both our staff and customers, and it has streamlined our operations significantly. The attention to detail and commitment to quality were evident throughout the project. We couldn't be happier with the service provided.",
  },
  {
    avatar: Me5,
    name: "John Smith, CEO at Tech Innovations",
    review:
      "Working with Oluwatobi Daniel was a fantastic experience. They delivered a top-notch e-commerce platform that exceeded our expectations. Their attention to detail, creativity, and technical expertise were evident throughout the project. The site is user-friendly, responsive, and has significantly boosted our online sales. I highly recommend Oluwatobi Daniel for any web development needs.",
  },
];

const H5 = styled.h5`
  color: black;
  font-size: 30px;
`;

const H2 = styled.h2`
  color: black;
  font-size: 20px;
`;
const Section = styled.div`
  // height: 100vh;
  border: 2px solid rgb(0, 195, 255);
  width: 700px;
  text-align: center;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const Div_Img = styled.div`
  background: blue;
  width: 4rem;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto 1rem;
  border: 0.4rem solid blue;
`;
const Review = styled.h5`
  font-size: 300;
  display: block;
  width: 80%;
  margin: 0.8rem auto 0;
`;
const Review_2 = styled.small`
  font-size: 300;
  display: block;
  width: 80%;
  margin: 0.8rem auto 0;
`;

const Testimonials = () => {
  return (
    <Section>
      <H5>Review from Client </H5>
      <H2>Testimonials</H2>
      <div>
        <Swiper
          style={{
            height: 300,
          }}
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {data.map(({ avatar, name, review, i }) => {
            return (
              <SwiperSlide key={i}>
                <Div_Img>
                  <img src={avatar} alt="img" />
                </Div_Img>
                <Review>{name}</Review>
                <Review_2>{review}</Review_2>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Section>
  );
};

export default Testimonials;
