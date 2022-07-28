import { IoLocationSharp } from "react-icons/io5";
import {handleStars} from "../../Utils/handleStars";
import * as Styled from "./BookingCard.style"
import {handleSumOfRating} from "../../Utils/handleSumOfRating";
import {randomRatings} from "../../Utils/handleRating";

const BookingCard = ({product, startDate, endDate, handleSubmit}) => {

  const {ratings, location} = product;
  const hasRating = ratings.length > 0 ? ratings : randomRatings;
  const value = handleSumOfRating(hasRating) / hasRating?.length;

  const {street, number, city, province, country} = location;

  return (
    <Styled.Detail>
      <Styled.Title>Detalle de la reserva</Styled.Title>
      <Styled.Card>
          <Styled.ImageContainer>
            <img
              src={product?.images?.[0]?.url}
              alt="imagen"
            />
          </Styled.ImageContainer>
          <Styled.Info>
              <Styled.CategoryNameInside>
                {product?.category?.title.toUpperCase()}
              </Styled.CategoryNameInside>
              <Styled.NameInside>{product?.name}</Styled.NameInside>
              <Styled.Star>{handleStars(value)}</Styled.Star>
              <Styled.Location>
                <IoLocationSharp/>
                <span>{street} {number}, {city}, {province}, {country}</span>
              </Styled.Location>
              <hr />
              <div className="check">
                  <h3>Check in</h3>
                  <p>{startDate}</p>
              </div>
              <hr />
              <div className="check">
                  <h3>Check out</h3>
                  <p>{endDate}</p>
              </div>
              <hr />
              <button className="btn-reserva" onClick={handleSubmit}>Confirmar Reserva</button>
          </Styled.Info>
      </Styled.Card>
    </Styled.Detail>
  );
};
export default BookingCard;
