import styled from "styled-components";

const FormButton = ({title}) => {
    return(
        <Button>{title}</Button>
    );
}

const Button = styled.button`
Height:40px;
width:164px;
margin-right:10px;
background-color:var(--contrast--color);
border:none;
color:var(--contrast--light);
border-radius:5px;
font-size:16px;
font-weight:bold;
cursor:pointer;
&:hover{
    filter: brightness(85%)
}
`;

export default FormButton;