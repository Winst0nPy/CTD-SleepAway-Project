import styled from "styled-components";

export const Slider = styled.div`
  display: block;
  position: relative;
  .carousel-status {
    right: 10px;
    top: 85%;
    font-size: 20px;
    color: var(--contrast--light);
  }
  @media only screen and (min-width: 768px) {
    .carousel-status {
      top: 90%;
    }
  }
  @media only screen and (min-width: 1366px) {
    display: none;
  }
`;

export const ButtonsPhone = styled.div`
  color: var(--contrast--light);
  display: flex;
  width: 100px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 10px;
  z-index: 1;
`;