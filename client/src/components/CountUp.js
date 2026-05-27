// import {useState, useEffect, useRef} from "react";
import {useState, useEffect, useRef, useCallback} from "react";
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

const AnimatedCounter = ({label, target = 1000, duration = 2000}) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef();
    const animationRef = useRef();

    const startAnimation = useCallback(() => {
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
        animationRef.current = requestAnimationFrame(animate);
    }, [target, duration]);

    useEffect(() => {
        const currentRef = counterRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startAnimation();
                }
            },
            {threshold: 0.6}
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }

            observer.disconnect();
            cancelAnimationFrame(animationRef.current);
        };
    }, [startAnimation]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "#f2f2f2",
                background: "linear-gradient(15deg, #02172d)",
                textAlign: "center",
                borderRadius: "5%/10%",
                transition: "transform 0.3s ease",
                cursor: "default",
                width: "100%",
                height: "100%",
                flexShrink: 0,
            }}
            ref={counterRef}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
            <div style={{fontSize: "50px", fontWeight: "bold"}}>{count}+</div>
            <div style={{fontSize: "16px", marginTop: "3px"}}>{label}</div>
        </div>
    );
};

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
            <h2
                style={{
                    color: "#F2F2F2",
                    fontSize: "25px",
                    marginBottom: "10px",
                    textAlign: "center",
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                WHY CHOOSE <br /> <Span>&rarr;</Span>US{" "}
            </h2>
            <div
                style={{
                    display: "flex",
                    color: "white",
                    justifyContent: "center",
                    maxWidth: "1200px",
                    width: "100%",
                    gap: "5px",
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
                    <AnimatedCounter label="Years Experience" target={11} duration={2000} />
                </div>
                <div
                    style={{
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                    }}
                >
                    <Card>
                        <AnimatedCounter label="Team Members" target={22} duration={2000} />
                    </Card>
                    <Card>
                        <AnimatedCounter label="Projects Delivered" target={50} duration={2000} />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CountUp;
