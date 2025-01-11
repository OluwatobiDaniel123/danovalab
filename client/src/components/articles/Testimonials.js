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
      "Oluwatobi Daniel was instrumental in redesigning our corporate website. They provided valuable insights into improving the user experience and implemented a modern design that aligns with our brand. Communication was excellent, and any issues were promptly addressed.",
  },
  {
    avatar: Me4,
    name: "John Smith, Owner of Gourmet Bistro",
    review:
      "We needed a reservation system for our restaurant, and Oluwatobi Daniel delivered a fantastic solution. The system is easy to use for both our staff and customers, and it has streamlined our operations significantly. We couldn't be happier with the service provided.",
  },
  {
    avatar: Me5,
    name: "John Smith, CEO at Tech Innovations",
    review:
      "Working with Oluwatobi Daniel was a fantastic experience. They delivered a top-notch e-commerce platform that exceeded our expectations. The site is user-friendly, responsive, and has significantly boosted our online sales. Highly recommended!",
  },
];

const Section = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  color: black;
`;

const Title = styled.h5`
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-variant: small-caps;
  font-weight: bold;
  border-bottom: 1px solid rgb(0, 195, 255);
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 30px;
  font-variant: small-caps;
`;

const SwiperWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0 20px 0;
  border-radius: 5%;

  background: linear-gradient(
    135deg,
    rgb(46, 46, 240) 0%,
    rgb(74, 140, 255) 100%
  );

  .swiper-pagination-bullet {
    background-color: #fff;
    opacity: 0.8;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
  }
`;

const Slide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
  border: 4px solid #fff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Name = styled.h5`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Review = styled.p`
  font-size: 0.9rem;
  padding: 10px;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;

const Testimonials = () => {
  return (
    <Section>
      <Title>Reviews from Clients</Title>
      <Subtitle>Testimonials</Subtitle>
      <SwiperWrapper>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {data.map(({ avatar, name, review }, index) => (
            <Slide key={index}>
              <Avatar>
                <img src={avatar} loading="lazy" alt={`Avatar of ${name}`} />
              </Avatar>
              <Name>{name}</Name>
              <Review>{review}</Review>
            </Slide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </Section>
  );
};

export default Testimonials;
