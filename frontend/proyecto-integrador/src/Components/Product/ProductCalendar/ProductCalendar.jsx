import Calendar from 'react-calendar';
import {useState, useEffect, useMemo} from "react";
import 'react-calendar/dist/Calendar.css';
import {useNavigate} from "react-router-dom";
import * as Styled from "./ProductCalendar.style"
import {handleBookedDates, tileDisabled} from "../../../Utils/handleCalendar";
import {handleRequestGet} from "../../../Utils/handleRequest";
import {isValueWithinRange} from "react-calendar/src/shared/utils";
import {API_PATHS} from "../../../config";


const ProductCalendar  = ({product}) => {
    const [doubleView, setDoubleView] = useState(window.innerWidth > 450);
    const [bookedDates, setBookedDates] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        if(product){
            handleRequestGet(API_PATHS.BOOKING_PRODUCT+product.id)
                .then(response => setBookedDates(response.data))
                .catch(error => console.log(error));
        }
        const handleResize = () => setDoubleView(window.innerWidth > 768)
        window.addEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const arrayOfBookedDates = useMemo( () =>
            handleBookedDates(bookedDates)
    , [bookedDates] )

    const handleClick = () => {
        localStorage.getItem("token")
        ? navigate(`/product/${product.id}/booking`)
        : navigate(`/login?prevPath=/product/${product.id}/booking`);
    }

    const handleTileClassName = ({ date }) => {
        for (let i = 0; i < arrayOfBookedDates.length; i++) {
            if(isValueWithinRange(date, arrayOfBookedDates[i])){
                return 'daysReserved'
            }
        }
        if(date >= new Date()){
            return 'daysAvailable'
            }
        }


    return (
        <Styled.Container>
            <Styled.Title>
                <h3>Fechas Disponibles</h3>
            </Styled.Title>
            <Styled.ReservationContainer>
                <Styled.CalendarContainer>
                    <Calendar   className="react-calendar"
                                showDoubleView={doubleView}
                                defaultView="month"
                                minDate={new Date()}
                                maxDate={new Date(2023, 12, 31)}
                                minDetail="month"
                                tileClassName={handleTileClassName}
                                showNavigation={true}
                                showFixedNumberOfWeeks={false}
                                selectRange={false}
                                nextLabel={">"}
                                prevLabel={"<"}
                                prev2Label={null}
                                next2Label={null}
                                showNeighboringMonth={false}
                                tileDisabled={tileDisabled}
                    />
                </Styled.CalendarContainer>
                <Styled.StartReservation>
                    <p>Agregá tus fechas de viaje para obtener precios exactos</p>
                    <button className="btn-reserva" onClick={handleClick}>Iniciar Reserva</button>
                </Styled.StartReservation>
            </Styled.ReservationContainer>
        </Styled.Container>
    )
}

export default ProductCalendar;