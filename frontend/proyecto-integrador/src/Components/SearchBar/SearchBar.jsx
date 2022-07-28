import styled from "styled-components";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import { registerLicense } from '@syncfusion/ej2-base';
import FormButton from "../Buttons/FormButton";
import DropDownInput from "./DropDownInput/DropDownInput";
import {useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../Assets/background5.jpg";
import handleDateFormat from "../../Utils/handleDateFormat";

registerLicense("ORg4AjUWIQA/Gnt2VVhiQlFadVlJVXxLYVF2R2FJfl56cFRMZV9BJAtUQF1hS35UdkZhW3pdcnNTRmhU")

const SearchBar = ({locations}) => {
    const [valueInput, setValueInput] = useState("");
    const navigate = useNavigate();
    const [dates, setDates] = useState([new Date(), new Date()]);
    const startDate = handleDateFormat(dates[0]);
    const endDate = handleDateFormat(dates[1]);
    const currentDate = handleDateFormat(new Date());
    const handleClick = () => {
        const inputCiudad = document.getElementById("ciudad");
        setValueInput(inputCiudad.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if( endDate !== currentDate && valueInput !== ""){
          navigate(`/${valueInput}-${startDate}-${endDate}?startDate=${startDate}&endDate=${endDate}&id=${valueInput}`);
        } else if (valueInput !== ""){
          navigate(`/search/${valueInput}`)
        }
    }
  return (
    <Container>
      <Title>Busca Casas, Hoteles y mucho más en la ciudad de tus sueños</Title>
      <Form onSubmit={handleSubmit} onClick={handleClick}>
        <DropDownInput locations={locations} />
        <div className="calendar">
          <DateRangePickerComponent
          placeholder="Selecciona tu fecha de viaje"
          onChange={(e) => setDates(e.value)}
          />
        </div>
        <FormButton title="Buscar" />
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 270px;
  align-items: center;
  justify-content: space-around;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  @media only screen and (min-width: 768px) {
    height: 240px;
    display: Flex;
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and (min-width: 1366px) {
    height: 250px;
  }
`;

const Title = styled.h1`
  height: 40px;
  font-size: 30px;
  text-align: center;
  color: var(--contrast--light);
  font-weight: 900;
`;

const Form = styled.form`
  width: 85vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .calendar {
    margin: 10px 0;
    height: 40px;
    width: 100%;
    .e-input-group {
      background-color: var(--contrast--light);
      height: 100%;
      border-radius: 5px;
      font-size: 16px;
      padding: 0 10px;
      font-weight: bold;
      color: var(--contrast--dark);
    }
    .e-range-icon::before {
      background: var(--contrast--light);
      color: var(--contrast--color);
    }
    
  }
  @media only screen and (min-width: 768px) {
    width: 90vw;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    .calendar {
      width: 30%;
    }
  }
`;

export default SearchBar;
