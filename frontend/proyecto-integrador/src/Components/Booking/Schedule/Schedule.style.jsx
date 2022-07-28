import styled from "styled-components";

export const Schedule = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: var(--contrast--light);
  width: 395px;
  border-radius: 10px;
  padding: 10px 0 10px 10px;
  margin-bottom: 30px;
  .room {
    display: flex;
    align-items: center;
    margin: 0;
    .icon{
      font-size: 20px;
      color: green;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
  }
  @media only screen and (min-width: 1366px) {
    margin-left: 15px;
    width: 64vw;
  }
`;

export const Subtitle = styled.p`
  align-self: flex-start;
  font-weight: bold;
  color: var(--contrast--dark);
  font-size: 15px;
  margin-left: 10px;
`;

export const Select = styled.select`
  width: 80%;
  height: 35px;
  background: white;
  font-weight: bold;
  color: var(--contrast--dark);
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin: 0 0 5px 10px;
  transition: all 0.3s ease-in-out;
  :hover {
    box-shadow: 0 2px 5px rgba(224, 83, 109, 0.8);
  }

  option {
    color: var(--contrast--dark);
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0 2px 1px;
    font-weight: bold;
  }
`;