import React from "react";
import "./Portfolio.css";

const Committee = () => {
  const otherMembers = [
    {
      name: "E-commerce Webapp",
      role: "Christalphawine.com",
      contribution: "Educational Programs",
      contact: "dexter.e@tobagoreads.org",
      link: "https://tobagoreads.com",
    },
    {
      name: "Charity Home Webapp",
      role: "Tobagoreads.com",
      contribution: "Youth Development",
      contact: "elizabeth.j@tobagoreads.org",
      link: "https://www.chrisalphawine.com", // Fixed
    },

    {
      name: "Harriet George",
      role: "Events Coordinator",
      contribution: "Cultural Programs",
      contact: "harriet.g@tobagoreads.org",
      link: "https://tobagoreads.com",
    },
    {
      name: "Catreena Holliday",
      role: "Committee Member",
      contribution: "Literacy Programs",
      contact: "catreena.h@tobagoreads.org",
      link: "https://tobagoreads.com",
    },
    {
      name: "Deslyn Erahbor",
      role: "Resource Coordinator",
      contribution: "Educational Resources",
      contact: "deslyn.e@tobagoreads.org",
      link: "https://tobagoreads.com",
    },
    {
      name: "Abigail Joseph",
      role: "Committee Member",
      contribution: "Youth Mentorship",
      contact: "abigail.j@tobagoreads.org",
      link: "https://tobagoreads.com",
    },
    {
      name: "Ailene Stanislaus",
      role: "Program Developer",
      contribution: "Reading Initiatives",
      contact: "ailene.s@tobagoreads.org",
      link: "https://tobagoreads.com",
    },
    {
      name: "Milton Eastman",
      role: "Committee Member",
      contribution: "Community Relations",
      contact: "milton.e@tobagoreads.org",
      link: "https://tobagoreads.com",
    },
  ];

  return (
    <div className="committee-container">
      <div className="other-members-section">
        <h2 className="section-title">Our Portfolio</h2>
        <div className="members-grid">
          {otherMembers.map((member, index) => (
            <div key={index} className="member-card">
              <div className="member-card-front">
                <div className="member-name">{member.name}</div>
                <div className="member-role">{member.role}</div>
              </div>
              <div className="member-card-back">
                <h3>Contact</h3>
                <h3>Contribution</h3>
                <p>{member.contribution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Committee;
