import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    color: var(--contrast--dark);
    font-size: 18px;
    margin: 20px;
  `;

export const Input = styled.input`
    width: calc(100% - 10px);
    height: 40px;
    border: none;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
    background-color: var(--contrast--light);
    color: var(--contrast--dark);
    font-size: 18px;
    border-radius: 5px;
  `;