import styled from "styled-components";

export const Subtitle = styled.h4`
  font-size: 20px;
`;

export const Title = styled.h1`
  display: flex;
  align-self: flex-start;
  margin: 25px 0 0 25px;
  color: var(--contrast--dark);
  font-size: 25px;
`;

export const Policy = styled.div`
  padding: 10px;
  @media only screen and (min-width: 768px) {
    width: 30%;
  }
`;

export const PolicyContainer = styled.div`
  margin: 50px 0;
`;

export const MainDiv = styled.div`
  color: var(--contrast--dark);
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;