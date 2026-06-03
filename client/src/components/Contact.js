import {useState} from "react";
import styled, {keyframes} from "styled-components";
import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import {FaCheckCircle, FaTimesCircle} from "react-icons/fa";
import {BASE_URL} from "../BASE_URL";
import axios from "axios";

const ContactSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    align-items: center;
    text-align: center;
    background: linear-gradient(120deg, #0d1117, #161b22);
`;

const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 2rem;
    padding: 10px 0 10px 0;

    @media (max-width: 769px) {
        flex-direction: column;
        padding: 0;
    }
`;

const ContactForm = styled.form`
    width: 100%;
    max-width: 500px;
    padding: 15px;
    border-radius: 7px;
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
    border: 1.5px solid rgb(0, 195, 255);

    h2 {
        font-size: 25px;
        font-weight: bold;
        color: black;
        border-bottom: 2px solid rgb(0, 195, 255);
        margin-bottom: 1rem;
    }

    input,
    textarea {
        width: 100%;
        padding: 1rem;
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 1.3px;
        border-radius: 0.5rem;
        background: #f9f9f9;
        border: 2px solid lightblue;
        resize: none;
        color: black;

        &:hover {
            border-color: rgb(0, 195, 255);
        }

        transition: all 0.3s ease-in-out;
    }

    @media (max-width: 768px) {
        border-radius: 0;
    }
`;

const ContactButton = styled.button`
    background: linear-gradient(45deg, #007bff, #00d4ff);
    color: white;
    font-weight: bold;
    padding: 10px 15px;
    width: 70%;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    border: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    &:disabled {
        background: grey;
        cursor: not-allowed;
    }
`;

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const StyledAlert = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: ${(props) => (props.type === "success" ? "#d4edda" : "#f8d7da")};
    color: ${(props) => (props.type === "success" ? "#155724" : "#721c24")};
    border: 1px solid ${(props) => (props.type === "success" ? "#c3e6cb" : "#f5c6cb")};
    border-radius: 5px;
    padding: 0.6rem 0.6rem;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: ${(props) => (props.animateOut ? slideOut : slideIn)} 0.5s ease;
    z-index: 1000;

    svg {
        margin-right: 10px;
        font-size: 1.5rem;
    }

    button {
        background: none;
        border: none;
        color: ${(props) => (props.type === "success" ? "#155724" : "#721c24")};
        font-size: 1.9rem;
        margin-left: 15px;
        cursor: pointer;
    }
`;

const Map = styled.iframe`
    border-radius: 5px;
    width: 100%;
    height: 70vh;

    @media (max-width: 768px) {
        border-radius: 0;
        height: 400px;
    }
`;

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);
    const [animateOut] = useState(false);

    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        message: "",
    });

    const HandleChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        });
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        console.log(inputValue);

        try {
            setLoading(true);
            const result = await axios.post(`${BASE_URL}/send-contact-mail`, inputValue);
            console.log(result);

            setAlertMessage({
                type: "success",
                message: "Message sent successfully!",
            });

            setInputValue({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.log(error.response?.data);
            setLoading(false);
            setAlertMessage({type: "error", message: "Failed to send message"});
        } finally {
            setLoading(false);

            setTimeout(() => {
                // setAnimateOut(true);
                setTimeout(() => setAlertMessage(null), 300);
            }, 3000);
        }
    };

    return (
        <ContactSection>
            <ContactContainer>
                <DotLottieReact
                    src="https://lottie.host/113aa8aa-b464-41a9-be0f-906d7a2d63b8/SSzUfeyU3r.lottie"
                    loop
                    autoplay
                    style={{
                        width: "100%",
                        maxWidth: "500px",
                        height: "auto",
                    }}
                />

                <ContactForm onSubmit={sendEmail}>
                    <h2>Contact Us</h2>
                    <input
                        type="text"
                        value={inputValue.name}
                        onChange={HandleChange}
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="email"
                        value={inputValue.email}
                        onChange={HandleChange}
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        rows="7"
                        value={inputValue.message}
                        onChange={HandleChange}
                        name="message"
                        placeholder="Your Message"
                        required
                    />

                    <ContactButton type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </ContactButton>
                </ContactForm>
                {alertMessage && (
                    <StyledAlert type={alertMessage.type} animateOut={animateOut}>
                        {alertMessage.type === "success" ? <FaCheckCircle /> : <FaTimesCircle />}
                        {alertMessage.message}
                        <button onClick={() => setAlertMessage(null)}>&times;</button>
                    </StyledAlert>
                )}
            </ContactContainer>

            <Map
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31708.98318283936!2d3.379205!3d6.524379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c6a6b0f8f5f%3A0x8c3f7c9f3a0a0f00!2sLagos!5e0!3m2!1sen!2sng!4v0000000000000"
                allowFullScreen
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </ContactSection>
    );
};

export default Contact;
