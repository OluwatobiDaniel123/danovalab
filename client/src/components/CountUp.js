// import styled from "styled-components";
// import { FaCalendarAlt, FaLaptopCode, FaCode, FaGlobe } from "react-icons/fa";
// import CountUp from "react-countup";

// const Container = styled.div`
//   background-color: #000;
//   color: #fff;
//   min-height: max-content;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   font-family: sans-serif;
//   padding: 2rem;

//   @media (max-width: 769px) {
//     padding: 0.5rem;
//   }
// `;

// const Title = styled.h1`
//   font-size: 30px;
//   text-align: center;

//   span {
//     display: inline-flex;
//     align-items: center;
//     font-weight: bold;
//     background: #93d201;
//     color: #000;
//     border-radius: 50%;
//     padding: 0.7rem;
//     margin-right: 0.5rem;
//     height: 50px;
//     width: 50px;
//   }
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: 3fr 1fr;
//   grid-template-areas:
//     "exp intl"
//     "brand intl"
//     "team intl";
//   gap: 0.5rem;
//   width: 100%;
//   max-width: 900px;
//   margin-top: 2rem;
// `;

// const Card = styled.div`
//   background: #fff;
//   color: ${(props) => (props.highlight ? "#000" : "#000")};
//   padding: 0.5rem;
//   border-radius: 1rem;
//   text-align: center;
//   border: 2px solid #ddd;
//   margin-bottom: 5px;
//   font-weight: bold;
//   font-size: 1.25rem;
//   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
//   transition: transform 0.4s, box-shadow 0.4s;
//   grid-area: ${(props) => props.area};

//   &:hover {
//     transform: translateY(1px);
//     box-shadow: 0 8px 15px rgba(0, 0, 0, 2);
//     border-color: #00c6ff;
//   }

//   span {
//     display: block;
//   }

//   svg {
//     display: block;
//     margin: 0 auto 0.5rem;
//     font-size: 2.5rem;
//     color: ${(props) => (props.highlight ? "#000" : "white")};
//   }
// `;
// const IconWrapper = styled.div`
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   margin: 0 auto;
//   width: 60px;
//   height: 60px;

//   @media (max-width: 769px) {
//     font-size: 1rem;
//     margin-bottom: 0;
//   }
// `;

// const Number = styled.h1`
//   font-size: 3rem;
//   font-weight: bold;
//   color: #333;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   @media (max-width: 769px) {
//     font-size: 2.5rem;
//   }
// `;

// const Label = styled.p`
//   font-size: 18px;
//   color: #666;
// `;

// const WhyChooseUs = () => {
//   return (
//     <Container>
//       <Title>
//         WHY CHOOSE <br /> <span>&rarr;</span>US
//       </Title>
//       <Grid>
//         <Card area="exp" highlight>
//           <IconWrapper>
//             <FaCalendarAlt style={{ color: "#007bff", fontSize: "40px" }} />
//           </IconWrapper>

//           <Number>
//             <CountUp end={20} style={{ fontWeight: "bolder" }} />
//             <span style={{ fontSize: "36px" }}>+</span>
//           </Number>
//           <Label>Years of Expertise</Label>
//         </Card>
//         <Card area="brand">
//           <IconWrapper>
//             <FaLaptopCode style={{ color: "#007bff", fontSize: "40px" }} />
//           </IconWrapper>

//           <Number>
//             <CountUp end={94} style={{ fontWeight: "bolder" }} />{" "}
//             <span style={{ fontSize: "36px" }}>+</span>
//           </Number>
//           <Label>Successful Projects</Label>
//         </Card>
//         <Card
//           area="intl"
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//           }}
//         >
//           <IconWrapper>
//             <FaCode style={{ color: "#007bff", fontSize: "40px" }} />
//           </IconWrapper>

//           <Number>
//             <CountUp end={22} style={{ fontWeight: "bolder" }} />{" "}
//             <span style={{ fontSize: "36px" }}>+</span>
//           </Number>
//           <Label>Skilled Developers</Label>
//         </Card>
//       </Grid>
//     </Container>
//   );
// };

// export default WhyChooseUs;
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
const Span = styled.span`
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  background: #93d201;
  color: #000;
  border-radius: 50%;
  padding: 0.4rem;
  margin-right: 0.5rem;
  height: 50px;
  width: 50px;
`;
const AnimatedCounter = ({ label, target = 1000, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef();
  const animationRef = useRef();

  const startAnimation = () => {
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * target);
      setCount(currentCount);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    cancelAnimationFrame(animationRef.current);
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.6 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
      cancelAnimationFrame(animationRef.current);
    };
  }, [target, duration]);

  return (
    <div
      ref={counterRef}
      style={{
        background: "linear-gradient(135deg, #02172d, #034874)",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
        color: "#F2F2F2",
        textAlign: "center",
        padding: "40px 20px",
        transition: "transform 0.3s ease",
        cursor: "default",
        minWidth: "250px",
        margin: "0 10px",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={{ fontSize: "60px", fontWeight: "bold" }}>{count}+</div>
      <div style={{ fontSize: "20px", marginTop: "15px" }}>{label}</div>
    </div>
  );
};

const DanovalabStats = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #02172d, #034874, #0b3d64)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          color: "#F2F2F2",
          fontSize: "40px",
          marginBottom: "40px",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        WHY CHOOSE <br /> <Span>&rarr;</Span>US{" "}
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <AnimatedCounter label="Active Clients" target={40} duration={2000} />
        <AnimatedCounter
          label="Projects Delivered"
          target={150}
          duration={2000}
        />
        <AnimatedCounter label="Years Experience" target={5} duration={2000} />
        <AnimatedCounter label="Team Members" target={12} duration={2000} />
      </div>

      <div
        style={{
          display: "none",
          width: "100%",
          overflowX: "auto",
          marginTop: "40px",
        }}
        className="mobile-scroll"
      >
        <div
          style={{
            display: "flex",
            padding: "10px",
          }}
        >
          <AnimatedCounter
            label="Projects Delivered"
            target={150}
            duration={2000}
          />
          <AnimatedCounter label="Active Clients" target={40} duration={2000} />
          <AnimatedCounter
            label="Years Experience"
            target={5}
            duration={2000}
          />
          <AnimatedCounter label="Team Members" target={12} duration={2000} />
          <AnimatedCounter
            label="Countries Reached"
            target={7}
            duration={2000}
          />
          <AnimatedCounter
            label="Technologies Mastered"
            target={20}
            duration={2000}
          />
        </div>
      </div>
    </div>
  );
};

export default DanovalabStats;
