import * as Icon from "react-icons/io5";
import * as Styled from "./CityDetails.styled"


const CityDetails = ({ city, province, country}) => {
    return (
        <Styled.LocationContainer>
          <Icon.IoLocationSharp size={20} />
          <Styled.CityConteiner>
            <Styled.LocationCity>{city}</Styled.LocationCity>
            <Styled.LocationCountry>{ `${province},  ${country}`}</Styled.LocationCountry>
          </Styled.CityConteiner>
        </Styled.LocationContainer>
    );
    }

export default CityDetails;