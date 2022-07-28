import styled from "styled-components";
import Gif from "../Assets/pink-verify.gif";
import SuccessfulButton from "../Components/Buttons/SuccessfulButton";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
      };
  return (
    <WelcomeContainer>
      <WelcomeWindow>
        <div>
            <img src={Gif} alt="gif" />
        </div>
        <WelcomeTitle>Bienvenido</WelcomeTitle>
        <WelcomeSubtitle>
            Gracias por Registrarte en SleepAway... Tu cama donde quieras!
        </WelcomeSubtitle>
        <SuccessfulButton title={"Comenzar"} onClick={handleClick} />
      </WelcomeWindow>
    </WelcomeContainer>
  );
};

const WelcomeContainer = styled.div`
  height: calc(100vh - 148px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WelcomeWindow = styled.div`
  width: 357px;
  height: 300px;
  background-color: var(--contrast--background-light);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   div {
    font-size: 60px;
  }
  
  @media only screen and (min-width: 768px) {
    width: 638px;
  }
`;
const WelcomeTitle = styled.h1`
  color: var(--contrast--color);
  margin: 0px;
`;
const WelcomeSubtitle = styled.h2`
  color: var(--contrast--dark);
  font-size: 15px;
  margin-bottom: 30px;
  text-align: center;
  padding: 0 20px;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
