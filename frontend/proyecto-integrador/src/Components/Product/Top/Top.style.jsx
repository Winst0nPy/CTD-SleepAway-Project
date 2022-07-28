import styled from "styled-components";

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 70px;
  background-color: var(--contrast--dark);
  .back {
    color: var(--contrast--light);
    padding-right: 15px;
  }
  @media only screen and (min-width: 768px) {
    height: 70px;
    display: Flex;
    justify-content: space-between;
  }
  @media only screen and (min-width: 1366px) {
    height: 70px;
  }
`;

export const TopLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 30px;
`;

export const Name = styled.h1`
  font-size: 25px;
  color: var(--contrast--light);
  margin: 0;
`;

export const CategoryName = styled.p`
  font-size: 15px;
  color: var(--contrast--light);
  margin: 0;
`;
