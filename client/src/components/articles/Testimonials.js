import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styled from "styled-components";

const TestimonialContainer = styled.div`
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(145deg, #f9f9f9, #ffffff);
  font-family: "Roboto", sans-serif;
`;

const SectionHeader = styled.h2`
  // font-size: 42px;
  // text-align: center;
  // margin-bottom: 50px;
  // color: #007bff;
  // position: relative;
  // display: inline-block;

  // &::after {
  //   content: "";
  //   display: block;
  //   width: 80px;
  //   height: 4px;
  //   background: #00c3ff;
  //   margin: 12px auto 0;
  // }
  font-size: 30px;
  width: 100%;
  font-variant: small-caps;
  border-bottom: 1px solid rgb(0, 195, 255);

  color: #333;
  margin-bottom: 10px;
`;

const TestimonialCard = styled.div`
  background: white;
  height: 300px;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  transition: transform 0.3s;
  box-shadow: 8px 6px 8px 0 rgba (0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px);
  }

  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #007bff;
  }

  p {
    font-size: 18px;
    color: #555;
  }
`;

const testimonials = [
  {
    name: "Jane Doe",
    feedback:
      "DANOVALAB exceeded our expectations! Their attention to detail and professionalism were outstanding.",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1736662186/banner3_bzntym.jpg",
  },
  {
    name: "John Smith",
    feedback:
      "The team at DANOVALAB delivered a top-notch product that transformed our business.",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1736662186/banner3_bzntym.jpg",
  },
  {
    name: "Emily Brown",
    feedback:
      "Fantastic experience! The team was highly responsive and delivered beyond what we imagined.",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1736662186/banner3_bzntym.jpg",
  },
  {
    name: "Jane Doe",
    feedback:
      "DANOVALAB exceeded our expectations! Their attention to detail and professionalism were outstanding.",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1736662186/banner3_bzntym.jpg",
  },
  {
    name: "Jane Doe",
    feedback:
      "DANOVALAB exceeded our expectations! Their attention to detail and professionalism were outstanding.",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1736662186/banner3_bzntym.jpg",
  },
];

const TestimonialPage = () => {
  return (
    <TestimonialContainer>
      <SectionHeader>What Our Clients Say</SectionHeader>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide style={{ height: "320px" }} key={index}>
            <TestimonialCard>
              <img src={testimonial.image} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.feedback}</p>
            </TestimonialCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </TestimonialContainer>
  );
};

export default TestimonialPage;
