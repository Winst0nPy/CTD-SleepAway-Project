import styled from "styled-components"

export const AddContainer = styled.div`
display:flex;
align-items:center;
`;
export const LabelsContainer = styled.div`
display: flex;
flex-direction: column;
width: 80%;
margin:20px;
@media only screen and (min-width: 768px) {
  flex-direction:row;
}
`;
export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--contrast--dark);
  font-size: 18px;
  margin-bottom: 10px;
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
  margin-top:1px;
`;

export const ButtonContainer = styled.div`
margin-left: 10px;
`;

export const Button = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    color: var(--contrast--light);
    font-size: 30px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        filter: brightness(0.8);
    }
`;
