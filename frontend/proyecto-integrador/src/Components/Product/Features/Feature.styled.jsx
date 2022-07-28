import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  align-self: flex-start;
  margin: 25px;
  color: var(--contrast--dark);
  font-size: 25px;
`;

export const IconContainer = styled.div`
  margin-left: 25px;
  display: grid;
  gap: 0.4rem;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  color: var(--contrast--dark);
`;