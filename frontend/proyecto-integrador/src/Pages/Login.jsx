import styled from "styled-components";
import FormButton from "../Components/Buttons/FormButton";
import SecondaryButton from "../Components/Buttons/SecondaryButton";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { API_PATHS } from "../config";
import { handleRequestLogin } from "../Utils/handleRequest";
import { VscError } from "react-icons/vsc";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const prevPath = searchParams.get("prevPath");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let pClass = document.getElementById("error");
    handleRequestLogin(API_PATHS.SIGNIN, { params: user })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data);
          prevPath ? navigate(prevPath) : navigate("/");
        } else {
          localStorage.setItem("token", response.data);
          localStorage.setItem("admin", "true");
          prevPath ? navigate(prevPath) : navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        pClass.classList.remove("hidden");
      });
  };

  return (
    <Container>
      {prevPath ? (
        <Alert>
          <VscError />
          <small>Para hacer una reserva debes estar Logueado</small>
        </Alert>
      ) : null}
      <p id="error" className="hidden error">
      <VscError />  Por favor vuelva a intentarlo, sus credenciales son inválidas.
        </p>  
      <BodyLogin>
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
          <FormButton title={"Ingresar"} />
        </form>
        <StyledLink>
          ¿Aún no tenes cuenta?
          <SecondaryButton title={"Registrate"} route="/register" />
        </StyledLink>
      </BodyLogin>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: calc(100vh - 90px);
  flex-direction: column;
  align-items: center;
  right: ${(props) => (props.open ? "0" : "-200%")};
  transition: right 0.3s linear;
  z-index: 525;
  background-color: var(--contrast--background-light);
  .error {
    font-size: 1.2rem;
    color: red;
    margin-top: 25px;
    background-color: var(--contrast--background-light);
    padding: 10px;
  }
  .hidden {
    display: none;
  }
`;
const Alert = styled.div`
  color: red;
  font-size: 1.2rem;
  margin-top: 1rem;
  display: flex;
  background-color: var(--contrast--background-light);
  padding: 10px;
  align-items: center;
  small {
    margin-left: 0.5rem;
  }
`;
const BodyLogin = styled.div`
  h1 {
    color: var(--contrast--color);
    text-align: center;
    margin-top: 50px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    width: 300px;
    label {
      align-self: flex-start;
      font-weight: bold;
      color: var(--contrast--dark);
    }
    input {
      width: 97%;
      border-radius: 5px;
      height: 40px;
      border: none;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      background-color: var(--contrast--light);
      margin-bottom: 15px;
    }
    input:nth-child(4) {
      margin-bottom: 40px;
    }
  }
`;
const StyledLink = styled.p`
  text-align: center;
`;

export default Login;
