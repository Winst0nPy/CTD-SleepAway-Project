import styled from "styled-components";
import {BsFillCaretLeftFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import ProductCard from "../Cards/ProductCard/ProductCard";
import { handleRequestGet } from "../../Utils/handleRequest";
import { API_PATHS } from "../../config";

const UserBookings = () => {
    const [user , setUser] = useState("");
    const [products, setProducts] = useState([]);
    const [booking, setBooking] = useState([]);

    useEffect(() => {
      handleRequestGet(API_PATHS.USER_ME, true)
        .then(response => setUser(response.data))
        .catch(error => console.log(error));
    }, []);

    useEffect(() => {
      handleRequestGet(API_PATHS.USER_BOOKING+user.id, true)
        .then(response => setBooking(response.data))
        .catch(error => console.log(error));
    }, [user.id]);

    useEffect(() => {
        if(booking.length > 0){
            handleRequestGet(API_PATHS.PRODUCT+"/"+booking[0].product.id)
                .then(response => setProducts(response.data))
                .catch(error => console.log(error));
        }
    }, [booking])


    console.log(user);
    console.log(products);
return (
    <BookingsContainer>
        <HeaderSection>
        <Title>
            Mis reservas
        </Title>
        <Link className="back" to="/">
          {" "}
          <BsFillCaretLeftFill />{" "}
        </Link>
      </HeaderSection>
      <hr />
      <ProductContainer>
        {(products.length > 0)? products.map((product, i) => {
            return (
                <ProductCard
                    key={i}
                    id={product.id}
                    image={product.images}
                    category={product.category.title}
                    title={product.name}
                    location={product.location.city}
                    description={product.description}
                    features={product.features}
                    rating={product.ratings}
                />
            );
        }): <Title>Todavía no has hecho ninguna reserva.</Title>}
      </ProductContainer>
    </BookingsContainer>
);
}
export default UserBookings;
const BookingsContainer = styled.div`
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
const HeaderSection = styled.div`
display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    .back{
        color: var(--contrast--black);
        font-size: 20px;
    }
`;
const Title = styled.h2`
display: flex;
      align-self: flex-start;
      margin: 25px 25px 10px 25px;
      color: var(--contrast--dark);
      font-size:25px;
`;
const ProductContainer = styled.div`
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

