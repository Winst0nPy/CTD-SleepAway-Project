import styled from "styled-components";
import Gif from "../Assets/pink-verify.gif";
import SuccessfulButton from "../Components/Buttons/SuccessfulButton";
import { useNavigate, useSearchParams } from "react-router-dom";
const Successful = () => {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const prevPath = searchParams.get("prevPath");

  const handleClick = () => {
    navigate("/");
  };

  return (
    <SuccessfulContainer>
      <SuccessfulWindow>
        <div>
          <img src={Gif} alt="gif" />
        </div>
        {prevPath ? (
          <>
            <Title>¡Muchas Gracias!</Title>
            <Subtitle>Su reserva se ha realizado con éxito.</Subtitle>
            <SuccessfulButton title={"Ok"} onClick={handleClick} />
          </>
        ) : (
          <>
            <Subtitle>Su alojamiento se ha creado con éxito.</Subtitle>
            <SuccessfulButton title={"Volver"} onClick={handleClick} />
          </>
        )}
      </SuccessfulWindow>
    </SuccessfulContainer>
  );
};
export default Successful;

const SuccessfulContainer = styled.div`
  height: calc(100vh - 148px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SuccessfulWindow = styled.div`
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
const Title = styled.h1`
  color: var(--contrast--color);
  margin: 0px;
`;
const Subtitle = styled.h2`
  color: var(--contrast--dark);
  font-size: 15px;
  margin-bottom: 30px;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
