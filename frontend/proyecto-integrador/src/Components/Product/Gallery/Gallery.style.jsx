import styled from "styled-components";

export const Gallery = styled.div`
  display: none;
  
  @media only screen and (min-width: 1366px) {
    display: block;
  }
`;

export const ButtonBig = styled.div`
  color: var(--contrast--dark);
  padding: 10px 30px;
  cursor: pointer;
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    width: 100px;
    justify-content: space-between;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  padding: 0 20px 20px 30px;
  span {
    height: 300px;
  }
  display: grid;
  --gap: 10px;
  --num-cols: 4;
  grid-template-columns: repeat(var(--num-cols), 1fr);
  gap: var(--gap);
  .image-grid-col-2 {
    grid-column: span 2;
  }
  .image-grid-row-2 {
    grid-row: span 2;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const ButtonGallery = styled.button`
  background-color: transparent;
  border: none;
  color: var(--contrast--light);
  font-size: 20px;
  position: absolute;
  bottom: 25px;
  right: 25px;
  cursor: pointer;
  text-decoration: underline;
  z-index: 1;
`;