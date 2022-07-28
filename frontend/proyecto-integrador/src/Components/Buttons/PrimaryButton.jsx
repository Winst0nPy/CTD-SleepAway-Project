import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PrimaryButton = ({ title,route }) => {
    return(
    <Button>
        <Link className="btn-link" to={`${route}`}>{title}</Link>
    </Button>
    );
}
const Button = styled.button`
Width:164px;
Height:40px;
margin-right:10px;
background-color:var(--contrast--light);
border: 1px solid var(--contrast--color);
color:var(--contrast--color);
border-radius:5px;
font-size:16px;
font-weight:bold;
cursor:pointer;

  .btn-link{
    color:var(--contrast--color);
    text-decoration:none;
}
`;

export default PrimaryButton;