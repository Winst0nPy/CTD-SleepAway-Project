import styled from "styled-components";

export default function WarningLabel({label, className, key}){
    return (
        <P key={key} className={className}>{label}</P>
    )
}

const P = styled.p`
font-size: 12px;
margin: 0;
text-align: left;
width: 100%;
`;