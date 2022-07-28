import styled from "styled-components";

export const Title = styled.h2`
      display: flex;
      align-self: flex-start;
      margin: 25px 25px 10px 25px;
      color: var(--contrast--dark);
      font-size:25px;
`;

export const ProductSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  background-color: var(--contrast--background-dark);
  hr {
    border: 0.3px solid var(--contrast--black);
    width: 95%;
  }
  @media only screen and (min-width: 768px) {
  min-height: calc(100vh - 148px - 280px);
  }
  @media only screen and (max-width: 768px) {
    min-height: calc(100vh - 148px - 290px);
  }
`;

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (min-width: 1366px){
        flex-direction: row;
        flex-wrap:wrap;
        margin: 0 auto;
        justify-content:center;
  }
`;

export const HeaderSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    .back{
        color: var(--contrast--black);
        font-size: 20px;
    }
`;