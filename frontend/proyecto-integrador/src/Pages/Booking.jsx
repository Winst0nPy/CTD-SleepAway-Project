import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import ProductPolicy from "../Components/Product/Policy/ProductPolicy";
import BookingCard from "../Components/Booking/BookingCard";
import PersonalData from "../Components/Booking/PersonalData/PersonalData";
import Reservation from "../Components/Booking/Revervation/Reservation";
import Schedule from "../Components/Booking/Schedule/Schedule";
import handleDateFormat from "../Utils/handleDateFormat";
import {handleRequestGet, handleRequestPost} from "../Utils/handleRequest";
import {API_PATHS} from "../config";
import {handleBookingResponse, validationDate, validationHours} from "../Utils/handleBooking";

export default function Booking () {

  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [user, setUser] = useState();
  const [isDoubleView, setDoubleView] = useState(window.innerWidth>411);
  const [dates, setDates] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [bookingTime, setBookingTime] = useState("")

  const createBookingJson = (bookingTime, startDate, endDate, product, user) => {
    return {
      "booking_time": bookingTime,
      "booking_starting_date": startDate,
      "booking_final_date": endDate,
      "product": {"id": product.id},
      "appUser": {"id": user.id}
    }}

  useEffect(() => {
    setStartDate(handleDateFormat(dates[0]))
    setEndDate(handleDateFormat(dates[1]))
  },[dates] )


  useEffect(() => {

    function handleResize() {
      setDoubleView(window.innerWidth > 768)
    }
    window.addEventListener("resize", handleResize);

    handleRequestGet(API_PATHS.USER_ME, true)
        .then(response => setUser(response.data))
        .catch(error => console.log(error));

    handleRequestGet(`${API_PATHS.PRODUCT}/${id}`)
        .then(response => setProduct(response.data))
        .catch(error => console.log(error));

  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validationDate(startDate, endDate) && !validationHours(bookingTime)){
      handleRequestPost(
        API_PATHS.BOOKING,
        createBookingJson(bookingTime, startDate, endDate, product, user),
        true)
        .then(response => handleBookingResponse(response, navigate, product))
        .catch(error => console.log(error));
    }
  }

  if(!product || !user){
    return <div/>
  }

  return (
    <div>
      <Top>
        <TopLeft>
          <CategoryName>{product.category.title.toUpperCase()}</CategoryName>
          <Name>{product.name}</Name>
        </TopLeft>
        <Link className="back" to="/">
          {" "}
          <FiChevronLeft size={44} />{" "}
        </Link>
      </Top>
      <form>
        <MainDiv>
          <Left>
            <Title>Datos Personales</Title>
            <PersonalData user={user}/>
            <Title>Seleccioná tu fecha de reserva</Title>
            <Reservation
                product={product}
                isDoubleView={isDoubleView}
                setDates={setDates}/>
            <Title>Tu horario de llegada</Title>
            <Schedule
                setBookingTime={setBookingTime}
                check_in={product.policy.check_in}/>
          </Left>
          <Right>
            <BookingCard
                product={product}
                startDate={startDate}
                endDate={endDate}
                handleSubmit={handleSubmit} />
          </Right>
        </MainDiv>
      </form>
      <ProductPolicy policy={product.policy} />
    </div>
  );
};

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 70px;
  background-color: var(--contrast--dark);
  .back {
    color: var(--contrast--light);
    padding-right: 15px;
  }
  @media only screen and (min-width: 768px) {
    height: 70px;
    display: Flex;
    justify-content: space-between;
  }
  @media only screen and (min-width: 1366px) {
    height: 70px;
  }
`;
const TopLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 30px;
`;
const Name = styled.h1`
  font-size: 20px;
  color: var(--contrast--light);
  margin: 0;
`;
const CategoryName = styled.p`
  font-size: 15px;
  color: var(--contrast--light);
  margin: 0;
`;

const Title = styled.h1`
  color: var(--contrast--dark);
  font-size: 25px;
  margin: 20px 10px
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction:column;
  width: 100%;
  align-items: center;
  background-color: var(--contrast--background-dark);
  padding: 15px 0 0 0;
  @media only screen and (min-width: 1366px) {
    flex-direction: row;
  }
`;

const Left = styled.div`
  @media only screen and (min-width: 1366px) {
    margin-bottom: 30px;
  }
`;

const Right = styled.div`
  margin-bottom: 30px;
  @media only screen and (min-width: 1366px) {
    margin-bottom: 0;
    margin-left: 2%;
    }
`;