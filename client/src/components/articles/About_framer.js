import "./About_framer.css";
import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function About_framer() {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="container">
      <div className="cube" ref={ref}>
        <div className="side front">
          <DotLottieReact
            src="https://lottie.host/2effce6e-d934-4a82-b560-258a82bd37b5/S6XY6sYXUq.lottie"
            loop
            autoplay
          />
        </div>
        <div className="side left">
          <DotLottieReact
            src="https://lottie.host/94b6bc0d-9a04-4a0e-ae78-127e61bc4bac/cdtXCVPnp2.lottie"
            loop
            autoplay
          />
        </div>
        <div className="side right">
          <DotLottieReact
            src="https://lottie.host/94b6bc0d-9a04-4a0e-ae78-127e61bc4bac/cdtXCVPnp2.lottie"
            loop
            autoplay
          />
        </div>
        <div className="side top">
          <DotLottieReact
            src="https://lottie.host/4f410472-12ee-46d1-a995-010a9db624d4/1P6vxEO5ud.lottie"
            loop
            autoplay
          />
        </div>
        <div className="side bottom">
          <DotLottieReact
            src="https://lottie.host/4f410472-12ee-46d1-a995-010a9db624d4/1P6vxEO5ud.lottie"
            loop
            autoplay
          />
        </div>
        <div className="side back">
          <DotLottieReact
            src="https://lottie.host/2effce6e-d934-4a82-b560-258a82bd37b5/S6XY6sYXUq.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
}
