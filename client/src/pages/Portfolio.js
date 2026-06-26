import {useEffect, useState} from "react";
import "./Portfolio.css";
import styled, {keyframes} from "styled-components";
import image from "../assets/IvyHotel.png";
import image1 from "../assets/xtiim.png";
import image2 from "../assets/hustle.png";
import image3 from "../assets/tobago.png";
import image4 from "../assets/chat.png";
import image5 from "../assets/event.png";

const fadeSlide = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
      transform: translate(-50%, -50%) ;
    
  }
  
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 999;
`;

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 800px;
    height: 80%;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(16px);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    gap: 10px;
    border-radius: 10%/50%;
    animation: ${fadeSlide} 0.3s ease;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

    @media (max-width: 600px) {
        height: 85%;
        padding: 1px;
    }
`;

const Iframe = styled.iframe`
    flex: 1;
    border: none;
    width: 100%;
    border-radius: 3%/5%;
`;

const CloseButton = styled.button`
    padding: 10px 25px;
    background: #d32f2f;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    align-self: flex-end;
    transition: background 0.3s ease;

    &:hover {
        background: #b71c1c;
    }
`;

const Content = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

const Modal = ({link, HandleModal, projectName}) => {
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") HandleModal();
        };
        document.body.style.overflow = "hidden";

        window.addEventListener("keydown", handleKey);
        return () => {
            window.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "auto";
        };
    }, [HandleModal]);

    return (
        <>
            <Overlay onClick={HandleModal} />
            <ModalWrapper>
                <Iframe src={link} title="Project Preview" />
                <Content>
                    <p style={{color: "white", fontSize: "13px"}}>{projectName}</p>
                    <CloseButton onClick={HandleModal}>Close</CloseButton>
                </Content>
            </ModalWrapper>
        </>
    );
};

const Committee = () => {
    const otherMembers = [
        {
            name: "Hotel Booking Platform (Room Reservation System)",
            link: "https://www.chrisalphawine.com/",
            image: image,
        },
        {
            name: "TobagoReads Literacy Initiative Platform",
            link: "https://tobagoread.com",
            image: image3,
        },
        {
            name: "Xtiim Music Official Website",
            link: "https://www.xtiimmusic.com",
            image: image1,
        },
        {
            name: "Full-Stack Artisan Service Marketplace Platform",
            link: "https://hustle-hub-chi.vercel.app/",
            image: image2,
        },
        {
            name: "ChatFlow – Real-Time Messaging Platform",
            link: "https://chatapp-client-five.vercel.app/",
            image: image4,
        },
        {
            name: "Fisis Kreation – Catering & Event Management",
            link: "https://event-cantering.vercel.app/",
            image: image5,
        },
    ];

    const FrontImage = styled.img`
        width: 100%;
        height: 100%;
        border-radius: 10%/20%;
    `;

    const P = styled.p`
        color: white;
        margin-left: 8px;

        @media (max-width: 768px) {
            font-size: 12px;
            font-weight: bold;
        }
    `;

    const [showModal, setShoModal] = useState(false);
    const [selectedLink, setSelectedLink] = useState(null);
    const [projectName, setProjectName] = useState(null);

    const HandleModal = () => {
        setShoModal((prev) => !prev);
    };

    const handleCardClick = (link, name) => {
        setProjectName(name);
        setSelectedLink(link);
        setShoModal(true);
    };

    return (
        <div>
            <div className="committee-container">
                <div className="other-members-section">
                    <h2 className="section-title">Our Portfolio</h2>
                    <div className="members-grid">
                        {otherMembers.map((member, index) => (
                            <div
                                key={index}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "4px",
                                }}
                            >
                                <div className="member-card" onClick={() => handleCardClick(member.link, member.name)}>
                                    <FrontImage src={member.image} />
                                </div>
                                <P>{member.name}</P>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {showModal && <Modal link={selectedLink} projectName={projectName} HandleModal={HandleModal} />}
        </div>
    );
};

export default Committee;
