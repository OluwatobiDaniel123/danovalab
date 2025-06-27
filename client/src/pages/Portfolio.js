import { useEffect, useState } from "react";
import "./Portfolio.css";
import styled, { keyframes } from "styled-components";

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
  padding: 20px;
  gap: 15px;
  border-radius: 12px;
  animation: ${fadeSlide} 0.3s ease;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 600px) {
    height: 75%;
    padding: 10px;
  }
`;

const Iframe = styled.iframe`
  flex: 1;
  border: none;
  width: 100%;
  border-radius: 8px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Modal = ({ link, HandleModal, projectName }) => {
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
          <p style={{ color: "white" }}>{projectName}</p>
          <CloseButton onClick={HandleModal}>Close</CloseButton>
        </Content>
      </ModalWrapper>
    </>
  );
};

const Committee = () => {
  const otherMembers = [
    {
      name: "E-commerce App",
      link: "https://www.chrisalphawine.com/",
      image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1749663104/Screenshot_2025-06-04_091156_rm8e6c.png",
      image2:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1749663648/Screenshot_2025-06-04_091228_r2wtuy.png",
    },
    {
      name: "Charity Home App",
      link: "https://tobagoreads.com/",
      image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1749663104/Screenshot_2025-06-11_182858_gwk0b5.png",
      image2:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1749663650/Screenshot_2025-06-11_183807_ohsfps.png",
    },
    {
      name: "Music Record Label",
      link: "https://xtiim-records-website.vercel.App/",
      image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1749663104/Screenshot_2025-06-04_092015_szm0pu.png",
      image2:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1749663648/Screenshot_2025-06-04_092035_zyzhwl.png",
    },
    {
      name: "Logistic Website",
      link: "https://swifthavenservice.com/",
      image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1749663104/Screenshot_2025-06-11_182815_kjuhl3.png",
      image2:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1749663650/Screenshot_2025-06-11_183851_qxa7f6.png",
    },
    {
      name: "LoveChat App",
      link: "https://chatapp-client-five.vercel.app/",
      image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1749663103/Screenshot_2025-06-11_182732_skq2qj.png",
      image2:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1749663650/Screenshot_2025-06-11_183949_k2j9zx.png",
    },
  ];

  const FrontImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 45px 10px 45px;
  `;
  const BackImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 45px 10px 45px;
    position: absolute;
  `;
  const P = styled.p`
    color: white;
    margin-left: 8px;

    @media (max-width: 768px) {
      font-size: 14px;
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
                <div
                  className="member-card"
                  onClick={() => handleCardClick(member.link, member.name)}
                >
                  <div className="member-card-front">
                    <FrontImage src={member.image} />
                  </div>
                  <div className="member-card-back">
                    <BackImage src={member.image2} />
                  </div>
                </div>
                <P>{member.name}</P>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <Modal
          link={selectedLink}
          projectName={projectName}
          HandleModal={HandleModal}
        />
      )}
    </div>
  );
};

export default Committee;
