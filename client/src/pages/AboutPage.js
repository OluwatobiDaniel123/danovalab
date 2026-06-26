import styled from "styled-components";
import {Link} from "react-router-dom";
import image from "../assets/image-14.jpg";
import image_1 from "../assets/image-15.png";

const About_Page = () => {
    return (
        <HeroSection>
            <Container>
                <TextContent>
                    <Title>ABOUT US</Title>
                    <Subtitle>
                        We are a team of forward-thinking developers, designers, and strategists dedicated to delivering
                        smart, customized tech solutions. At DANOVALAB, we focus on creating high-performance software
                        that simplifies complex challenges and accelerates growth for businesses across industries.{" "}
                    </Subtitle>
                    <CTAContainer>
                        <CTA to="/Services">Explore Services</CTA>
                        <SecondaryCTA to="/Contact">Get in Touch</SecondaryCTA>
                    </CTAContainer>
                </TextContent>
                <ImageWrapper>
                    <HeroImage
                        src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1736662186/banner3_bzntym.jpg"
                        alt="Innovation and Technology"
                    />
                </ImageWrapper>
            </Container>
            <Services>
                <div>
                    <CardTitle>Meet Our Team</CardTitle>
                    <TeamSection>
                        <TeamMember>
                            <img src={image_1} alt="Team Member" />
                            <h4>Oluwatobi Daniel</h4>
                            <p>CEO & Founder</p>
                        </TeamMember>
                        <TeamMember>
                            <img
                                src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1741418057/Screenshot_2025-03-08_081014_nvnzth.png"
                                alt="Team Member"
                            />
                            <h4>Emily Brown</h4>
                            <p>Lead Developer</p>
                        </TeamMember>
                        <TeamMember>
                            <img src={image} alt="Team Member" />
                            <h4>Dansu Grace</h4>
                            <p>UI/UX Designer</p>
                        </TeamMember>
                    </TeamSection>
                </div>
            </Services>
        </HeroSection>
    );
};

export default About_Page;

const TeamSection = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    margin-top: 40px;
`;

const TeamMember = styled.div`
    text-align: center;
    max-width: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        border-radius: 50%;
        width: 80px;
        height: 80px;
        object-fit: cover;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    img:hover {
        transform: scale(1.1);
        box-shadow: 0 12px 50px rgba(0, 0, 0, 0.15);
    }

    h4 {
        font-size: 18px;
        margin-top: 20px;
        color: #555;

        font-weight: 600;
    }

    p {
        font-size: 14px;
        color: #888;
        font-weight: 800;
    }

    @media (max-width: 768px) {
        padding: 0;
    }
`;

const HeroSection = styled.section`
    background: linear-gradient(120deg, #0d1117, #161b22);
    color: #f5f7fa;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const TextContent = styled.div`
    max-width: 600px;
    text-align: left;

    @media (max-width: 768px) {
        text-align: center;
    }
`;

const Title = styled.h1`
    font-size: 2.2rem;
    font-weight: bold;
    color: #58a6ff;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`;

const Subtitle = styled.p`
    font-size: 1.15rem;
    line-height: 1.4;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        line-height: 1.3;
        text-align: left;
        font-size: 1rem;
    }
`;

const CTAContainer = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const CTA = styled(Link)`
    padding: 12px 30px;
    background: #238636;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
        background: #2ea043;
        transform: translateY(-3px);
    }
`;

const SecondaryCTA = styled(Link)`
    padding: 12px 30px;
    background: transparent;
    color: #58a6ff;
    font-weight: bold;
    border: 2px solid #58a6ff;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
        background: #58a6ff;
        color: #fff;
    }
`;

const ImageWrapper = styled.div`
    max-width: 500px;

    @media (max-width: 768px) {
        margin-top: 40px;
    }
`;

const HeroImage = styled.img`
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
`;

const Services = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    max-width: 1200px;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 60px;
    padding: 40px 20px;

    @media (max-width: 768px) {
        padding: 4px 2px;
    }
`;

const CardTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: bold;
    color: #58a6ff;
`;
