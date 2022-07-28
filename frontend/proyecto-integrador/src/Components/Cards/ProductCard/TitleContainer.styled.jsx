import styled from "styled-components";

export const TopProps = styled.div`
margin: 5px 0;
display: flex; 
flex-direction: column;
align-items: flex-start;
height: 20px;
p {
    margin: 0 10px 0 0;
`;

export const Star = styled.div`
  color: var(--contrast--color);
  font-size: 16px;
`;

export const Rank = styled.div`
  flex: 1 1 35%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const RankText = styled.p`
  margin: 0;
  font-size: 14px;
  padding: 0 5px;
`;

export const RankNumber = styled.p`
  margin: 0 5px 0 0;
  padding: 4px 8px;
  background-color: var(--contrast--dark);
  color: var(--contrast--light);
  border-radius: 5px;
  font-size: 16px;
  `;