import HeartButton from "../../Buttons/HeartButton";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import ProductCardButton from "../../Buttons/ProductCardButton";
import IconContainer from "./IconContainer";
import TitleContainer from "./TitleContainer";
import * as Styled from "./ProductCard.styled"
import {handleSumOfRating} from "../../../Utils/handleSumOfRating";
import {randomRatings} from "../../../Utils/handleRating";

const ProductCard = ({location, features, description, id, image, title, rating, category}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };
  const defaultImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
  const hasRating = rating.length > 0 ? rating : randomRatings;
  const numberOfStars = handleSumOfRating(hasRating) / hasRating.length;

  return (
    <Styled.CardContainer>
      <Styled.ImageContainer>
        {image[0].url ? <img src={image[0].url} alt="imagen" /> : <img src={defaultImage} alt="imagen" /> }
        <HeartButton
          isLiked={isFavorite}
          onClick={handleClick}
          size={45}
          color={"var(--contrast--light)"}
          position={"absolute"}
        />
      </Styled.ImageContainer>
      <Styled.CardContent>
        <TitleContainer
            title={category}
            value={numberOfStars}/>
        <h3>{title}</h3>
        <p><FaMapMarkerAlt/> {location}</p>
        <IconContainer
            features={features}/>
        <Styled.CardDescription>
          {description}
        </Styled.CardDescription>
        <Styled.BottomProps>
          <ProductCardButton
              title={"Ver detalle"}
              route={id}/>
        </Styled.BottomProps>
      </Styled.CardContent>
    </Styled.CardContainer>
  );
};

export default ProductCard;
