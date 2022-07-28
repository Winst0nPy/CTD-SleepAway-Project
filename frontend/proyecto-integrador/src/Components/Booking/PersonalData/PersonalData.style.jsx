import styled from "styled-components";

export const Data = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  width: 391px;
  flex-direction: column;
  border-radius: 10px;
  background-color: var(--contrast--light);
  padding: 20px 0;
  margin: 0 0 20px 0;
  .divform{
    div {
      display: flex;
      flex-direction: column;
     }
  }
  transition: all 0.3s ease-in-out;
  :hover {
    box-shadow: 0 2px 5px rgba(224, 83, 109, 0.8);
  }
  
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 80vw;
    .divform{
      width: 50%;
    }
  }
  
  @media only screen and (min-width: 1366px) {
    width:65vw;
    margin: 0 0 20px 15px;

`;

export const Label = styled.label`
  font-weight: bold;
  color: var(--contrast--dark);
  margin-left: 5%;
`;

export const Input = styled.input`
  margin-bottom: 15px;
  border:none;
  margin-left: 5%;
  width: 88%;
  border-radius: 10px;
  height: 40px;
  background-color: var(--contrast--background-dark);
  color: var(--contrast--dark);
  padding-left: 10px;
`;