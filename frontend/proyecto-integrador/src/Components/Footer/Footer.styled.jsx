import styled from "styled-components";
import {useLocation} from "react-router-dom";

export const FooterContainer = styled.div`
    background-color: var(--contrast--color);
    height: 58px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position:${() =>{
        const location = useLocation();
        return (location.pathname === "/login" || location.pathname === "/register") ? "absolute" : "sticky"
    }
};
    width: 100%;
    bottom: 0;
    z-index: 15;
`;

export const Left = styled.div`
    height:50px;
    margin: 10px;
    display:flex;
    align-items: center;
    img{
        height: 50px;
    }
`;

export const Title = styled.p`
    font-size: 0.8rem;
    font-weight: bold;
    color: var(--contrast--light);
    letter-spacing: 0.5px;
    margin-left: 10px;
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    margin: 0 10px;
    color: var(--contrast--light);
    > * {
        padding: 5px;
        @media only screen and (max-width: 768px) {
           display: none;
        }
      }
`;

export const Center = styled.p`
    font-size: 15px;
    font-weight: bold;
    color: var(--contrast--light);
    letter-spacing: 0.5px;
    @media only screen and (max-width: 768px) {
      font-size: 0.5rem;  
    }
`;