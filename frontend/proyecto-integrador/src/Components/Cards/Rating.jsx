import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import React from "react";
import styled from "styled-components";
import {randomRatings} from "../../Utils/handleRating";
import {handleSumOfRating} from "../../Utils/handleSumOfRating";

const Rating = ({rating}) => {

  if(!rating){
    return <div/>
  }

  const hasRating = rating.length > 0 ? rating : randomRatings;
  const value = handleSumOfRating(hasRating) / hasRating.length;

  const amountStars = () => {
    let stars = [];
    for (let i = 0; i < value; i++) {
      stars.push(<FaStar key={i}/>);
    }
    if (value - Math.floor(value) > 0) {
      stars.pop();
      stars.push(<FaStarHalfAlt  key={stars.length}/>);
    }
    for(let i = stars.length; i < 5; i++) {
      stars.push(<FaRegStar key={i}/>);
    }
    return stars;
  }

  return (
        <RankingContainer>
        <div>
          <RankingText>
            {(value === 0 || value < 4) ? "Regular":"Excelente"}
          </RankingText>
          <Ranking>
            {amountStars()}
          </Ranking>
        </div>
        <RankingNum>{value*2}</RankingNum>
      </RankingContainer>
    );
};


const RankingContainer = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
  }
  `;
const RankingText = styled.p`
  margin: 0;
  font-size: 20px;
  padding: 0 15px;

`;
const Ranking = styled.p`
  margin: 0;
  color: var(--contrast--color);
  padding: 0 15px;
  `;
const RankingNum = styled.p`
  margin: 0 20px 0 0;
  padding: 5px 15px;
  background-color: var(--contrast--dark);
  color: var(--contrast--light);
  border-radius: 10px;
  font-size: 25px;
  `;

export default Rating;