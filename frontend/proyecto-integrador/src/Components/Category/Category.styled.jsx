import styled from "styled-components";

export const CategorySection = styled.div`
    display: flex;
    flex-direction: column;
    background-color:var(--contrast--light);
    padding: 20px 0; 
    hr{
        border:1px solid var(--contrast--black);
        width:95%;
    }
`;

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    button{
        background-color:transparent;
        border: none;
        margin: 5px;

    }
  
    @media only screen and (min-width: 768px){
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: center;
        max-width:900px;
        margin: 0 auto;
    }
    @media only screen and (min-width: 1366px){
        max-width:100%;
    }
`;