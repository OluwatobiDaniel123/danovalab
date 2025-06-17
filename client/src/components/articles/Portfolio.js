import "./Portfolio.css";
import styled from "styled-components";

const Committee = () => {
  const otherMembers = [
    {
      name: "E-commerce app",
      link: "https://www.chrisalphawine.com/",
      contribution: "Educational Programs",
      contact: "dexter.e@tobagoreads.org",

      image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1749663104/Screenshot_2025-06-04_091156_rm8e6c.png",
      image2:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1749663648/Screenshot_2025-06-04_091228_r2wtuy.png",
    },
    {
      name: "Charity Home app",
      link: "https://tobagoreads.com/",
      contribution: "Youth Development",
      contact: "elizabeth.j@tobagoreads.org",

      image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1749663104/Screenshot_2025-06-11_182858_gwk0b5.png",
      image2:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1749663650/Screenshot_2025-06-11_183807_ohsfps.png",
    },
    {
      name: "Music Record Label",
      link: "https://xtiim-records-website.vercel.app/",
      contribution: "Youth Development",
      contact: "elizabeth.j@tobagoreads.org",

      image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1749663104/Screenshot_2025-06-04_092015_szm0pu.png",
      image2:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1749663648/Screenshot_2025-06-04_092035_zyzhwl.png",
    },
    {
      name: "Moving Company Website",
      link: "https://swifthavenservice.com/",
      contribution: "Youth Development",
      contact: "elizabeth.j@tobagoreads.org",

      image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1749663104/Screenshot_2025-06-11_182815_kjuhl3.png",
      image2:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1749663650/Screenshot_2025-06-11_183851_qxa7f6.png",
    },
    {
      name: "LoveChat app",
      link: "https://chatapp-client-five.vercel.app/",
      contribution: "Youth Development",
      contact: "elizabeth.j@tobagoreads.org",

      image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1749663103/Screenshot_2025-06-11_182732_skq2qj.png",
      image2:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1749663650/Screenshot_2025-06-11_183949_k2j9zx.png",
    },
  ];

  const FrontImage = styled.img`
    width: 100%;
    height: 100%;
    // object-fit: cover;
    border-radius: 15px;
  `;
  const BackImage = styled.img`
    width: 100%;
    height: 100%;
    // object-fit: cover;
    border-radius: 15px;
    position: absolute;
  `;

  return (
    <div className="bg">
      <div className="committee-container">
        <div className="other-members-section">
          <h2 className="section-title">Our Portfolio</h2>
          <div className="members-grid">
            {otherMembers.map((member, index) => (
              <a key={index} className="member-card" href={member.link}>
                <div className="member-card-front">
                  <FrontImage src={`${member.image}`} />
                </div>
                <div className="member-card-back">
                  <BackImage src={`${member.image2}`} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committee;
