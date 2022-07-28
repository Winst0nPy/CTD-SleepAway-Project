import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 10px;
  width: 393px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  background-color: var(--contrast--light);
  transition: all 0.3s ease-in-out;
  :hover {
    box-shadow: 0 2px 5px rgba(224, 83, 109, 0.8);
  }
  @media only screen and (min-width: 768px) {
    width: 710px;
    height: 279px;
    display: flex;
    align-items: center;
    border-radius: 10px;
  }
  @media only screen and (min-width: 1366px) {
    width: 635px;
    height: 283px;
    margin: 15px;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  height: 231px;
  width: 393px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 0 0 10px 10px;
  }
  @media only screen and (min-width: 768px) {
    width: 344px;
    height: 280px;
    img {
      margin-top: 10px;
      width: 344px;
      height: 260px;
      border-radius: 0 10px 10px 0;
    }
  }
  @media only screen and (min-width: 1366px) {
    height: 283px;
    width: 311px;
    img {
      height: 283px;
      width: 311px;
      border-radius: 10px;
      margin-top: 0;
    }
  }
`;

export const CardContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 260px;
  padding: 10px;
  h3 {
    height: 30px;
    font-size: 25px;
    margin: 0;
    overflow: hidden;
    padding-bottom: 5px;
  }
  p{
    margin: 0;
    padding-bottom: 5px;
  }
  .header-card {
    display: flex;
    justify-content: space-between;
  }
  @media only screen and (min-width: 768px) {
    width: 366px;
  }
  @media only screen and (min-width: 1366px) {
    width: 352px;
  }
`;

export const CardDescription = styled.p`
  max-height: 50px;
  flex-shrink: 1;
  margin: 0;
  font-size: 14px;
  overflow: hidden;
  padding: 10px 0;
`;

export const BottomProps = styled.div`
  position: absolute;
  width: 100%;
  bottom: 5px;
  text-align: center;
  left: 0;
`;
