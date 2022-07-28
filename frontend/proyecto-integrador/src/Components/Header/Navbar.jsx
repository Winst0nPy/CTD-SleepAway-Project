import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserAvatar from "./UserAvatar";

const Navbar = ({ open, buttons, handleClick }) => {
  return (
    <NavbarWrapper open={open}>
      <TopBar>
        {localStorage.getItem("token") ? <UserAvatar /> : <h2>Menú</h2>}
      </TopBar>
      <MidBar>
        {localStorage.getItem("admin") ? (
          <>
            <Link to="/add-product" className="button-mid">
              <button>Administrar</button>
            </Link>
            <hr />
            <Link to="/mis-reservas" className="button-mid">
              <button>Mis Reservas</button>
            </Link>
          </>
        ) : null}
        {localStorage.getItem("token") && !localStorage.getItem("admin") ? (
          <Link to="/mis-reservas" className="button-mid">
            <button>Mis Reservas</button>
          </Link>
        ) : null}
        {localStorage.getItem("token") ? (
          <div className="closeSesion">
            <p>
              ¿Deseas
              <Link to="/login" onClick={(e) => localStorage.clear()}>
                <button className="close">Cerrar sesión</button>
              </Link>
              ?
            </p>
            <hr />
          </div>
        ) : (
          buttons.map((button, i) => (
            <div key={i}>
              <Link to={button.route} key={i}>
                <button onClick={handleClick}>{button.title}</button>
              </Link>
              {i !== buttons.length - 1 && <hr />}
            </div>
          ))
        )}
      </MidBar>
      <BotBar>
        <FaFacebook className="icons" />
        <FaLinkedin className="icons" />
        <FaTwitter className="icons" />
        <FaInstagram className="icons" />
      </BotBar>
    </NavbarWrapper>
  );
};
const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 1px;
  width: 100%;
  height: 100%;
  background: var(--contrast--light);
  right: ${(props) => (props.open ? "0" : "-100%")};
  transition: right 0.3s linear;
  z-index: 550;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
const TopBar = styled.div`
  display: flex;
  height: 175px;
  width: 100%;
  text-align: right;
  align-items: flex-end;
  justify-content: flex-end;
  background: var(--contrast--color);
  h2 {
    margin-right: 1rem;
    color: var(--contrast--light);
    font-size: 20px;
  }
`;
const MidBar = styled.div`
  height: calc(100vh - 175px);
  text-align: right;
  font-weight: bold;
  margin-top: 1rem;
  color: var(--contrast--black);
  position: relative;
  hr {
    margin-right: 0;
    width: 95%;
    border: 1px solid var(--contrast--dark);
  }
  button {
    margin-right: 10px;
    border: none;
    background: transparent;
    height: 40px;
    font-size: 19px;
    font-family: quicksand;
    margin-right: 0;
    font-weight: bold;
    color: var(--contrast--dark);
    cursor: pointer;
  }
  .closeSesion {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    p {
      margin-right: 10px;
      margin-bottom: 0;
      font-size: 16px;
      .close {
        color: var(--linked-button-color);
      }
    }
  }
`;
const BotBar = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-end;
.icons {
    margin-right: 1rem;
    margin-bottom: 1rem;
    font-size: 24px;
    color: var(--contrast--black);
`;
export default Navbar;
