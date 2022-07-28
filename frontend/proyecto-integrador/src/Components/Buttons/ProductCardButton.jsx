import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProductCardButton = ({title, route}) => {
    const navigate = useNavigate();
    const goDetails = () => {
        navigate(`/product/${route}`);
      }
    return(
        <Button onClick={goDetails}>{title}</Button>
    );
}
const Button = styled.button`
    Height:40px;
    width:95%;
    margin: 0 auto;
    background-color:var(--contrast--color);
    border:none;
    color:var(--contrast--light);
    border-radius:5px;
    font-size:16px;
    font-weight:bold;
    box-shadow:0 2px 4px rgba(0,0,0,0.2);
    cursor:pointer;
    &:hover{
        filter: brightness(85%)
    }
`;

export default ProductCardButton;