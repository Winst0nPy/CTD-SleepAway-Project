import styled from "styled-components";

export const ContainerCard = styled.div`   
    background-color: var(--contrast--light);
    border-radius: 10px;
    box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
    width: 392px;
    height: 312px;
    transition: all 0.3s ease-in-out;
    :hover {
      box-shadow: 0 2px 5px rgba(224, 83, 109, 0.8);
      transform: scale(1.05);
    }
    @media only screen and (min-width: 768px) {
    width: 347px;
    height: 244px;
    }
    @media only screen and (min-width: 1366px) {
        width: 310px;
        height: 247px;
    }
`;

export const ImageContainer = styled.div`
    width: 392px;
    height: 205px;
    img {
        width: 100%;
        height: 100%;
        border-radius:10px 10px 0 0;
    }
    @media only screen and (min-width: 768px) {
        width: 347px;
        height: 181.32px;
    }
    @media only screen and (min-width: 1366px) {
        width: 310px;
        height: 183px;
    }
`;

export const CardContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 63.37px;
    width: 310px;
    h3 {
        font-size: 20px;
        margin: 11.60px 0 0 11px;
    }
    @media only screen and (min-width: 768px) {
        width: 310px;
    }
    @media only screen and (min-width: 1366px) {
    }
`;

export const Paragraph = styled.p`
    font-size: 14px;
    margin: 5px 10px;
    color: var(--contrast--dark);
    text-align: left;
`;

export const TopProps = styled.div`
  margin: 5px 0;
  display: flex; 
  align-items: center;
  height: 20px;
  
  h3 {
    font-size: 20px;
    margin: 11.60px 0 0 10px;
    color: var(--contrast--black);
    font-weight: bold;
  }
  
  p {
    margin: 0 10px 0 0;
  }
`;
