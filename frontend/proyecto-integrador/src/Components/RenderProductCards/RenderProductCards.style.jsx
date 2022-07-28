import styled from "styled-components";

export const LodgingSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  background-color: var(--contrast--background-dark);
  hr {
    border: 0.3px solid var(--contrast--black);
    width: 95%;
  }
`;

export const LodgingContainer =  styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 1366px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
  }
`;