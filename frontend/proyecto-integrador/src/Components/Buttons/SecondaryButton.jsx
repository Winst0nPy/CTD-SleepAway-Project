import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const SecondaryButton = ({ title,route }) => {
    return(
        <Button>
            <Link className="btnlink2" to={`${route}`}>{title}</Link>
        </Button>
    );
}
const Button = styled.button`
    margin-right:10px;
    background-color:transparent;
    border:none;
    font-size:16px;
    font-weight:bold;
    cursor:pointer;
    .btnlink2{
        text-decoration:none;
        color: var(--linked-button-color);
    }
`;

export default SecondaryButton;