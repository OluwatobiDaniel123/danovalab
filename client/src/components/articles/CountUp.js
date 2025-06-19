import styled from "styled-components";
import { FaCalendarAlt, FaLaptopCode, FaCode, FaGlobe } from "react-icons/fa";
import CountUp from "react-countup";

const Container = styled.div`
  background-color: #000;
  color: #fff;
  min-height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  padding: 2rem;

  @media (max-width: 769px) {
    padding: 0.5rem;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;

  span {
    display: inline-flex;
    align-items: center;
    font-weight: bold;
    background: #93d201;
    color: #000;
    border-radius: 50%;
    padding: 0.8rem;
    margin-right: 0.5rem;
    height: 60px;
    width: 60px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas:
    "exp intl"
    "brand intl"
    "team intl";
  gap: 0.5rem;
  width: 100%;
  max-width: 900px;
  margin-top: 2rem;
`;

const Card = styled.div`
  background: #fff;
  color: ${(props) => (props.highlight ? "#000" : "#000")};
  padding: 0.5rem;
  border-radius: 1rem;
  text-align: center;
  border: 2px solid #ddd;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 1.25rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s, box-shadow 0.4s;
  grid-area: ${(props) => props.area};

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 2);
    border-color: #00c6ff;
  }

  span {
    display: block;
  }

  svg {
    display: block;
    margin: 0 auto 0.5rem;
    font-size: 2.5rem;
    color: ${(props) => (props.highlight ? "#000" : "white")};
  }
`;
const IconWrapper = styled.div`
  background: #2a5298;

  border-radius: 50%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 60px;
  height: 60px;

  @media (max-width: 769px) {
    font-size: 1rem;
    margin-bottom: 0;
  }
`;

const Number = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 769px) {
    font-size: 2rem;
  }
`;

const Label = styled.p`
  font-size: 18px;
  color: #666;
`;

const WhyChooseUs = () => {
  return (
    <Container>
      <Title>
        WHY CHOOSE <br /> <span>&rarr;</span>US
      </Title>
      <Grid>
        <Card area="exp" highlight>
          <IconWrapper>
            <FaCalendarAlt style={{ color: "white", fontSize: "25px" }} />
          </IconWrapper>

          <Number>
            <CountUp end={11} />
            <span>+</span>
          </Number>
          <Label>Years of Expertise</Label>
        </Card>
        <Card area="brand">
          <IconWrapper>
            <FaLaptopCode style={{ fontSize: "25px" }} />
          </IconWrapper>

          <Number>
            <CountUp end={114} /> <span>+</span>
          </Number>
          <Label>Successful Projects</Label>
        </Card>
        <Card
          area="intl"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <IconWrapper>
            <FaCode style={{ fontSize: "25px" }} />
          </IconWrapper>

          <Number>
            <CountUp end={22} /> <span>+</span>
          </Number>
          <Label>Skilled Developers</Label>
        </Card>
      </Grid>
    </Container>
  );
};

export default WhyChooseUs;
