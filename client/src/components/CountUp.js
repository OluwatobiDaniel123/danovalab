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
