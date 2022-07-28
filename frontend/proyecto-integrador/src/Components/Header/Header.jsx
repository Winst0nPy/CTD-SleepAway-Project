import styled from "styled-components";
import logo from "../../Assets/icono-color.png";
import MenuButton from "./MenuButton";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ButtonNav from "./ButtonNav";
import UserAvatar from "./UserAvatar";

const Header = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <HeaderWrapper>
            <Logo>
                <Link to="/">
                <img src={logo} alt="logo" />
                </Link>
                <Slogan>
                    <h1>Tu cama donde quieras</h1>
                </Slogan>
            </Logo>
            { localStorage.getItem("token") ?
            (
                <Div>
                    <UserAvatar/>
                    <ButtonNav buttons={[]} open={open}/>
                </Div>
            ) :
            (
                (location.pathname === "/login" ) ? 
                <ButtonNav buttons={[{title:"Crear Cuenta",route:"register"}]} open={open} handleClick={handleClick}/>
                    : (location.pathname === "/register" )
                    ? <ButtonNav buttons={[{title:"Iniciar sesion",route:"login"}]} open={open} handleClick={handleClick}/>
                    : <ButtonNav buttons={[{title:"Iniciar sesion",route:"login"}, {title:"Crear Cuenta", route:"register"}]} open={open} handleClick={handleClick}/>
            )}
            <MenuButton open={open} handleClick={handleClick} />
        </HeaderWrapper>
    );
}
const HeaderWrapper = styled.div`
    position: sticky;
    top: 0;
    z-index: 500;
    background-color: var(--contrast--light);
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    @media only screen and (min-width: 768px) {
        box-shadow: none;
    }
`;
const Logo = styled.div`
padding: 0 10px;
height: 70px;
display: flex;
align-items: center;
width: 100%;
img {
    height: 70px;
}
`;
const Slogan = styled.div`
color: var(--contrast--dark);
width: 100%;
position: relative;
h1 {
    display: none;
}
@media only screen and (min-width: 1366px) {
    h1 {
        display: block;
        position: absolute;
        padding: 0 10px;
        font-size: 25px;
        margin: 0;
    }
}
`;

const Div = styled.div`
    >div:first-child {
        display: none;
        @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        }
    }
`;
export default Header;