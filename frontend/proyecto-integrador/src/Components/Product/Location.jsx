import CityDetails from "../Cards/CityDetails";
import Rating from "../Cards/Rating";
import * as Styled from "./Location.style"

export default function Location({city, province, country, ratings}){
    return (
        <Styled.Location>
            <CityDetails
                city={city}
                province={province}
                country={country}
            />
            <Rating rating={ratings} />
        </Styled.Location>
    )
}