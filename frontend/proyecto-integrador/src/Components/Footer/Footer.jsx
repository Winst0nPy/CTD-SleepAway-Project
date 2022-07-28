import {FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import iconoT from '../../Assets/iconoT.png';
import * as Styled from "./Footer.styled"

export default function Footer() {

    const ICON_SIZE = 25;

    return (
        <Styled.FooterContainer>
            <Styled.Left>
                <img src={iconoT} alt="iconoT" />
                <Styled.Title> © 2022 SleepAway</Styled.Title>
            </Styled.Left>
            <Styled.Center>
                Digital House - Proyecto Integrador - Camada 2 Grupo 04
            </Styled.Center>
            <Styled.Right>
                <FaFacebook className="icon" size={ICON_SIZE}/>
                <FaLinkedinIn className="icon" size={ICON_SIZE}/>
                <FaTwitter className="icon" size={ICON_SIZE}/>
                <FaInstagram className="icon" size={ICON_SIZE}/>
            </Styled.Right>
        </Styled.FooterContainer>
    );
}