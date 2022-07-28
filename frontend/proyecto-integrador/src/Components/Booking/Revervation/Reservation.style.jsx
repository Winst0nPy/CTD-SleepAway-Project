import styled from "styled-components";
import styledComponents from "styled-components";

export const Reservation = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: var(--contrast--light);
  width: 395px;
  height: 279px;
  margin: 0 0 30px 4px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  :hover {
    box-shadow: 0 2px 5px rgba(224, 83, 109, 0.8);
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
  }
  @media only screen and (min-width: 1366px) {
    width: 65vw;
    margin-left: 15px;
  }
`;

export const ReservationContainer = styledComponents.div`
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 0px;
    padding: 0 2rem 2rem;
    display: block;
    @media only screen and (max-width: 1365px) {
        display: block;
    }
    @media only screen and (max-width: 767px) {
        padding: 0 1rem 1rem;
        display: block;
    }
`;

export const CalendarContainer = styledComponents.div`
grid-area: 1 / 1 / 2 / 3;
.react-calendar {
    width: 100%;
    border-radius: 8px;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.react-calendar__month-view__weekdays__weekday{
    color: var(--contrast--black);
    font-weight: 900;
}
.react-calendar__tile--now {
    background: var(--contrast--color); 
}
.react-calendar__tile--active {
    background: var(--contrast--color);
}
.react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus {
    background: var(--contrast--color);
}
.react-calendar__month-view__weekdays__weekday > abbr{
    text-decoration: none;
}
.react-calendar__month-view__days__day--weekend{
    color: inherit;
}
.react-calendar__navigation__arrow {
    color: var(--contrast--black);
    font-size: 1.5rem;
}
.react-calendar__navigation button:disabled,
.react-calendar__navigation button:focus{
    background-color: inherit;
}
.react-calendar__month-view:first-child {
    border-right: 2px solid var(--contrast--color);
}
    .react-calendar__navigation__label__labelText {
    text-transform: capitalize;
    color: black;
    font-weight: bold;
    }

    @media only screen and (max-width: 767px){
    .react-calendar__month-view:first-child {
        border-right: none;
    }
}
`;