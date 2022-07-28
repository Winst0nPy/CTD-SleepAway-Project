import styled from "styled-components";
const SuccessfulButton = (props) => {
    return(
        <Button onClick={props.onClick}>
            {props.title}
        </Button>
    )
}
export default SuccessfulButton;
const Button = styled.button`
Height:40px;
width:170px;
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
