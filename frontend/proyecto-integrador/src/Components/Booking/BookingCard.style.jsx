import styled from "styled-components";

export const Detail = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height:686px;
  width:391px;
  background-color:var(--contrast--light);
  border-radius:10px;
  ;
  
  hr {
   width:90%;
  }
  .check{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-left:5%;
    margin-right:5%;
    color:var(--contrast--dark);
  }
  
  button{
    width:90%;
    background-color:var(--contrast--color);
    color:var(--contrast--light);
    border:none;
    height:50px;
    margin-left:5%;
    margin-top:5px;
    border-radius:5px;
}
transition: all 0.3s ease-in-out;
  :hover {
    box-shadow: 0 2px 5px rgba(224, 83, 109, 0.8);
    transform: scale(1.05);
  }
  @media only screen and (min-width: 768px) {
      height: 410px;
      width: 708px;
      .check{
        h3{
          margin:10px;
        }
      }
      button{
        margin-top:25px;
      }
    }
  @media only screen and (min-width: 1366px) {
    height:817px;
    width:409px;
    .check{
        h3{
          margin:25px;
        }
    }
    `;
export const Card = styled.div`
    @media only screen and (min-width: 768px) {
    display:flex;
    }
    @media only screen and (min-width: 1366px) {
      flex-direction:column;
    }
    `;
export const Info = styled.div`
    @media only screen and (min-width: 1366px) {
      margin-top:5%;
    }
    `;
export const Title = styled.h1`
      color: var(--contrast--dark);
      font-size: 25px;
      padding: 20px 0 5px 10px;
      margin: 0;
    `;
export const ImageContainer = styled.div`
    height:269px;
    width:391px;
    img{
        height:269px;
        width:391px;
        object-fit:cover;
    }
    @media only screen and (min-width: 768px) {
      height:312px;
      width: 318px;
      img{
          height:312px;
          width:318px;
      }
    }
    @media only screen and (min-width: 1366px) {
      height:300px;
      width:409px;
      img{
          height:300px;
          width:409px;
      }
    }
`;
export const NameInside = styled.h1`
  font-size: 20px;
  color: var(--contrast--dark);
  margin: 0 10px;
`;
export const CategoryNameInside = styled.p`
  font-size: 15px;
  color: var(--contrast--dark);
  margin: 0 10px;
`;
export const Star = styled.div`
  color: var(--contrast--color);
  font-size: 16px;
  margin: 10px;
`;
export const Location = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
    span{
        margin-left:10px;
    }
`;
