import "./Portfolio.css";
import styled from "styled-components";
import img from "../../assets/Port1.png";
import img1 from "../../assets/Port2.png";
import img2 from "../../assets/Port3.png";
import img3 from "../../assets/Port4.png";

const Committee = () => {
  const otherMembers = [
    {
      name: "E-commerce app",
      role: "Christalphawine.com",
      contribution: "Educational Programs",
      contact: "dexter.e@tobagoreads.org",
      link: "https://tobagoreads.com",
      image: img,
      image2: img1,
    },
    {
      name: "Charity Home app",
      role: "Tobagoreads.com",
      contribution: "Youth Development",
      contact: "elizabeth.j@tobagoreads.org",
      link: "https://www.chrisalphawine.com",
      image: img2,
      image2: img3,
    },
    {
      name: "Charity Home Webapp",
      role: "Tobagoreads.com",
      contribution: "Youth Development",
      contact: "elizabeth.j@tobagoreads.org",
      link: "https://www.chrisalphawine.com",
      image: img,
      image2: img,
    },
    {
      name: "Charity Home Webapp",
      role: "Tobagoreads.com",
      contribution: "Youth Development",
      contact: "elizabeth.j@tobagoreads.org",
      link: "https://www.chrisalphawine.com",
      image: img,
      image2: img,
    },
    {
      name: "Charity Home Webapp",
      role: "Tobagoreads.com",
      contribution: "Youth Development",
      contact: "elizabeth.j@tobagoreads.org",
      link: "https://www.chrisalphawine.com",
      image: img,
      image2: img,
    },
  ];

  const FrontImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  `;
  const BackImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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
                  <h6 className="member-name">{member.name}</h6>
                  <p className="member-role">{member.role}</p>
                </div>
                <div className="member-card-back">
                  <BackImage src={`${member.image2}`} />
                  <h6>Contact</h6>
                  <p>{member.contribution}</p>
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
