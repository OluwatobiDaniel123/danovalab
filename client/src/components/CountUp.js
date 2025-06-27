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

const Card = styled.div`
  display: flex;
  width: 300px;
  height: 200px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 200px;
  }
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

  const AnimationDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(135deg, #02172d, #034874);
    color: #f2f2f2;
    text-align: center;
    transition: transform 0.3s ease;
    cursor: default;
    width: 100%;
    height: 100%;
    flex-shrink: 0;

    // @media (max-width: 768px) {
    //   width: max-content;
    //   height: max-content;
    // }
  `;

  return (
    <AnimationDiv
      ref={counterRef}
      style={
        {
          // display: "flex",
          // alignItems: "center",
          // flexDirection: "column",
          // justifyContent: "center",
          // background: "linear-gradient(135deg, #02172d, #034874)",
          // borderRadius: "16px",
          // boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
          // color: "#F2F2F2",
          // textAlign: "center",
          // padding: "40px 20px",
          // transition: "transform 0.3s ease",
          // cursor: "default",
          // width: "100%",
          // height: "100%",
          // margin: "0 10px",
          // flexShrink: 0,
        }
      }
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={{ fontSize: "50px", fontWeight: "bold" }}>{count}+</div>
      <div style={{ fontSize: "18px", marginTop: "10px" }}>{label}</div>
    </AnimationDiv>
  );
};

// const DanovalabStats = () => {
//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #02172d, #034874, #0b3d64)",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "20px 10px",
//       }}
//     >
//       <h1
//         style={{
//           color: "#F2F2F2",
//           fontSize: "40px",
//           marginBottom: "40px",
//           textAlign: "center",
//           fontFamily: "'Poppins', sans-serif",
//         }}
//       >
//         WHY CHOOSE <br /> <Span>&rarr;</Span>US{" "}
//       </h1>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//           gap: "30px",
//           width: "100%",
//           maxWidth: "1200px",
//         }}
//       >
//         <AnimatedCounter
//           label="Projects Delivered"
//           target={150}
//           duration={2000}
//         />
//         <AnimatedCounter label="Years Experience" target={5} duration={2000} />
//         <AnimatedCounter label="Active Clients" target={40} duration={2000} />
//         <AnimatedCounter label="Team Members" target={12} duration={2000} />
//       </div>
//       <div
//         style={{
//           display: "none",
//           width: "100%",
//           overflowX: "auto",
//           marginTop: "40px",
//         }}
//         className="mobile-scroll"
//       >
//         <div
//           style={{
//             display: "flex",
//             padding: "10px",
//           }}
//         >
//           <AnimatedCounter
//             label="Projects Delivered"
//             target={150}
//             duration={2000}
//           />
//           <AnimatedCounter label="Active Clients" target={40} duration={2000} />
//           <AnimatedCounter
//             label="Years Experience"
//             target={5}
//             duration={2000}
//           />
//           <AnimatedCounter label="Team Members" target={12} duration={2000} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DanovalabStats;

const CountUp = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 5px",
      }}
    >
      <h1
        style={{
          color: "#F2F2F2",
          fontSize: "30px",
          marginBottom: "10px",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        WHY CHOOSE <br /> <Span>&rarr;</Span>US{" "}
      </h1>
      <div
        style={{
          display: "flex",
          color: "white",
          justifyContent: "center",
          maxWidth: "1200px",
          width: "100%",
          gap: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "300px",
            justifyContent: "center",
          }}
        >
          <AnimatedCounter
            label="Years Experience"
            target={5}
            duration={2000}
          />
        </div>
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Card>
            <AnimatedCounter label="Team Members" target={22} duration={2000} />
          </Card>
          <Card>
            <AnimatedCounter
              label="Projects Delivered"
              target={50}
              duration={2000}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CountUp;
