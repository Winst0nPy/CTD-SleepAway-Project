import styledComponents from "styled-components";

export const Container = styledComponents.div`
background-color: #EEEFF2;
padding-bottom: 1rem;
`

export const StartReservation = styledComponents.div`
height: 150px;
grid-area: 1 / 3 / 2 / 4;
background-color: var(--contrast--light);
border-radius: 8px;
width: 100%;
text-align: left;
font-size: 1.125rem;
font-weight: 600;
color: var(--contrast--dark);
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
.btn-reserva{
    text-align: center;
    background-color: var(--contrast--color);
    border-radius: 8px;
    width: 90%;
    height: 3rem;
    border: none;
    color: var(--contrast--light);
    font-size: 1rem;
    font-weight: 500;
    margin: 0 auto;
    display: block;
}
.btn-reserva:hover{
    filter: brightness(85%)
}
p{
    width: 90%;
    margin: 0 auto;
    padding: 1.25rem 0;
}
@media only screen and (max-width: 1365px) {
    background-color: inherit;
    height: auto;
    padding-top: 2rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
    box-shadow: none;
}
@media only screen and (max-width: 767px) {
    display: block;
    padding-top: 0;
    p{
        width: 100%;
    }
    .btn-reserva {
        width: 100%;
    }
}
`

export const Title = styledComponents.div`
font-size: 1.5rem;
color: var(--contrast--dark);
text-align: left;
padding: 1rem 2rem;
`

export const ReservationContainer = styledComponents.div`
display: grid;
align-items: center;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 2rem;
grid-row-gap: 0px;
padding: 0 2rem 2rem;
@media only screen and (max-width: 1365px) {
    display: block;
}
@media only screen and (max-width: 767px) {
    padding: 0 1rem 1rem;
}
`

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
    background: var(--contrast--background-today);
    color: var(--contrast--black);
}
.react-calendar__month-view__weekdays__weekday > abbr{
    text-decoration: none;
}
.react-calendar__month-view__days__day--weekend{
    color: var(--contrast--black);

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
    color: var(--contrast--black);
    font-weight: bold;
}

.daysReserved {
  color:var(--contrast--black);
  background-color: var(--contrast--background-reserved);
}

.daysAvailable{
  color: var(--contrast--black);
  background-color: var(--contrast--background-available);
}

@media only screen and (max-width: 767px){
    .react-calendar__month-view:first-child {
        border-right: none;
    }
}
`;