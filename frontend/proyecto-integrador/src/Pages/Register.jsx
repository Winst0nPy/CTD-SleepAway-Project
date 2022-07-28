import styled from "styled-components";
import FormButton from "../Components/Buttons/FormButton";
import SecondaryButton from "../Components/Buttons/SecondaryButton";
import { useState } from "react";
import {handleAuthRegisterFormError } from "../Utils/handleAuthRegisterForm";
import { useNavigate } from "react-router-dom";
import {handleRequestPost} from "../Utils/handleRequest";
import {API_PATHS} from "../config";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    city: "",
    email: "",
    lastName: "",
    name: "",
    password: "",
    password2: "",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      city: user.city,
      email: user.email,
      lastName: user.lastName,
      name: user.name,
      password: user.password,
    }
    if (handleAuthRegisterFormError(user)) {
      handleRequestPost(API_PATHS.SIGNUP, data)
          .then(response => {
            if (response.status === 201) {
              navigate("/login")
            }})
          .catch(error => console.log(error));
    }
  }
  return (
    <Container>
      <BodyLogin>
        <h1>Crear cuenta</h1>
        <form onSubmit={handleSubmit}>
          <div className="divform">
            <div>
              <Label htmlFor="name">Nombre
              <Input type="text" id="name" value={user.name} required
                onChange={(e) => setUser({ ...user, name: e.target.value })} />
              </Label>
            </div>
            <div>
              <Label htmlFor="lastName">Apellido
              <Input type="text" id="lastName" value={user.lastName} required
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
              </Label>
            </div>
          </div>
          <Label htmlFor="city">Ciudad de Residencia
          <Input type="text" id="city" value={user.city} required
            onChange={(e) => setUser({ ...user, city: e.target.value })}/>
          </Label>
          <Label htmlFor="email">Correo Electrónico
          <Input type="email" id="email" value={user.email} required
            onChange={(e) => setUser({ ...user, email: e.target.value })}/>
          </Label>
          <Label htmlFor="password">Contraseña
          <Input type="password" id="password" value={user.password} required
            onChange={(e) => setUser({ ...user, password: e.target.value })} />
          <P className="hidden errorReg">**Error: la contraseña debetener entre 6 y 8 caracteres</P>
          </Label>
          <Label htmlFor="password2">Confirmar Contraseña
          <Input type="password" id="password2" value={user.password2} required
            onChange={(e) => setUser({ ...user, password2: e.target.value })} />
          <P className="hidden errorReg">**Las contraseñas no coinciden</P>
          </Label>
          <FormButton title={"Crear cuenta"} type="submit" />
        </form>
        <StyledLink>
          ¿Ya tenes cuenta?
          <SecondaryButton title={"Inicia Sesión"} route="/login" />
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
`;
const BodyLogin = styled.div`
  h1 {
    color: var(--contrast--color);
    text-align: center;
    margin-top: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    width: 80vw;
    .divform{
     width: 100%;
    }
    .hidden{
      display: none;
    }
    
    .errorReg{
    color: red;
    }  
  }
  @media only screen and (min-width: 768px) {
    form{
      width: 50vw;
    }
    }
  @media only screen and (min-width: 1366px) {
    h1{
      margin-top: 30px;
    }
    form{
      width: 40vw;
      margin-top: 30px;
    }
    .divform {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      div{
        width: 49%;
      }
    }
  }
`;
const Label = styled.label`
  align-self: flex-start;
  font-weight: bold;
  color: var(--contrast--dark);
  width: 100%;
  `;
const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  height: 40px;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: var(--contrast--light);
  margin: 10px 0;
`;
const P = styled.p`
font-size: 12px;
margin: 0;
text-align: left;
width: 100%;
`;

const StyledLink = styled.p`
  text-align: center;
  margin:0;
  @media only screen and (min-width: 1366px) {
    margin-top: 10px;
  }
`;
export default Register;
