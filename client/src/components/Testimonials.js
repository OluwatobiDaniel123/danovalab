import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styled from "styled-components";
import image1 from "../../src/assets/testimonals_images/img_1.jpg";
import image2 from "../../src/assets/testimonals_images/img_2.jpg";
import image3 from "../../src/assets/testimonals_images/img_3.jpg";
import image4 from "../../src/assets/testimonals_images/img_4.jpg";

const TestimonialContainer = styled.div`
    text-align: center;
    padding: 10px 5px;
    max-width: 1200px;
    border-radius: 8px;
    margin: 0 auto;
    background: linear-gradient(145deg, #f9f9f9, #ffffff);
`;

const SectionHeader = styled.h2`
    font-weight: bold;
    font-size: 25px;
    width: 100%;
    border-bottom: 1px solid rgb(0, 195, 255);
    color: #333;
    margin-bottom: 10px;
`;

const TestimonialCard = styled.div`
    background: white;
    height: 300px;
    border-radius: 12px;
    padding: 30px;
    margin: 10px;
    text-align: center;
    transition: transform 0.3s;
    box-shadow: 0 0 0 2px lightblue;

    &:hover {
        transform: translateY(-5px);
    }

    img {
        border-radius: 50%;
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin-bottom: 20px;
        transition: 0.3s ease;

        &:hover {
            transform: scale(1.1);
        }
    }

    h3 {
        font-size: 20px;
        margin-bottom: 10px;
        color: #007bff;
    }

    p {
        font-size: 15px;
        color: #555;
    }
`;

const testimonials = [
    {
        name: "Jane Doe",
        feedback:
            "DANOVALAB exceeded our expectations! Their attention to detail and professionalism were outstanding.",
        image: image1,
    },
    {
        name: "John Smith",
        feedback: "The team at DANOVALAB delivered a top-notch product that transformed our business.",
        image: image2,
    },
    {
        name: "Helianne Duke",
        feedback: "Fantastic experience! The team was highly responsive and delivered beyond what we imagined.",
        image: "https://res.cloudinary.com/dbcygr0pi/image/upload/v1741725412/IMG-20250311-WA0037_ffpae3.jpg",
    },
    {
        name: "Lima Esther",
        feedback:
            "DANOVALAB exceeded our expectations! Their attention to detail and professionalism were outstanding.",
        image: image3,
    },
    {
        name: "Jane Doe",
        feedback:
            "DANOVALAB exceeded our expectations! Their attention to detail and professionalism were outstanding.",
        image: image4,
    },
];

const TestimonialPage = () => {
    return (
        <TestimonialContainer>
            <SectionHeader>What Our Clients Say</SectionHeader>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{clickable: true}}
                autoplay={{delay: 3000, disableOnInteraction: false}}
                spaceBetween={5}
                slidesPerView={1}
                breakpoints={{
                    640: {slidesPerView: 1},
                    768: {slidesPerView: 2},
                    1024: {slidesPerView: 3},
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide style={{height: "340px"}} key={index}>
                        <TestimonialCard>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <img src={testimonial.image} alt={testimonial.name} style={{}} />
                                <h3>{testimonial.name}</h3>
                                <p>{testimonial.feedback}</p>
                            </div>
                        </TestimonialCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </TestimonialContainer>
    );
};

export default TestimonialPage;
