import Calendar from "react-calendar";
import * as Styled from "./Reservation.style"
import {isValueWithinRange} from "react-calendar/src/shared/utils";
import {useEffect, useMemo, useState} from "react";
import {handleRequestGet} from "../../../Utils/handleRequest";
import {API_PATHS} from "../../../config";
import {handleBookedDates} from "../../../Utils/handleCalendar";

export default function Reservation({isDoubleView, setDates, product}) {
    const [bookedDates, setBookedDates] = useState([])

    useEffect(() => {
        if(product){
            handleRequestGet(API_PATHS.BOOKING_PRODUCT+product.id)
                .then(response => setBookedDates(response.data))
                .catch(error => console.log(error));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const arrayOfBookedDates = useMemo( () =>
            handleBookedDates(bookedDates)
        , [bookedDates] )

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

    const handleTileDisabled = ({date}) => {
        for (let i = 0; i < arrayOfBookedDates.length; i++) {
            if(isValueWithinRange(date, arrayOfBookedDates[i])){
                return true
            }
        }
    }


    return (
        <Styled.Reservation>
            <Styled.ReservationContainer>
                <Styled.CalendarContainer>
                    <Calendar
                        className="react-calendar"
                        showDoubleView={isDoubleView}
                        tileClassName={handleTileClassName}
                        defaultView="month"
                        minDate={new Date()}
                        maxDate={new Date(2022, 12, 31)}
                        minDetail="month"
                        showNavigation={true}
                        showFixedNumberOfWeeks={false}
                        selectRange={true}
                        nextLabel={">"}
                        prevLabel={"<"}
                        prev2Label={null}
                        next2Label={null}
                        returnValue={"range"}
                        showNeighboringMonth={false}
                        onChange={setDates}
                        tileDisabled={handleTileDisabled}
                    />
                </Styled.CalendarContainer>
            </Styled.ReservationContainer>
        </Styled.Reservation>
    )
}

