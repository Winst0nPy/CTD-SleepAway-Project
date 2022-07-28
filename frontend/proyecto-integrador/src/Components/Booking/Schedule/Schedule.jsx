import {AiOutlineCheckCircle} from "react-icons/ai";
import TimeOptions from "../TimeOptions";
import * as Styled from "./Schedule.style"

export default function Schedule({setBookingTime, check_in}){
    return (
        <Styled.Schedule>
            <div className="room">
                <AiOutlineCheckCircle className="icon" />
                <Styled.Subtitle>
                    Tu habitación va a estar lista para el check-in entre las {check_in}.
                </Styled.Subtitle>
            </div>
            <Styled.Subtitle>Indicá tu horario estimado de llegada</Styled.Subtitle>
            <Styled.Select
                onChange={(e) => {
                    setBookingTime(e.target.options[e.target.selectedIndex].innerHTML)}
                }>
                <option value="" hidden>Seleccionar hora de llegada</option>
                <TimeOptions/>
            </Styled.Select>
        </Styled.Schedule>
    )
}

