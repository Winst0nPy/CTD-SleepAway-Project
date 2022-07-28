import styled from "styled-components";
import { useState, useRef } from "react";
import CityDetails from "../../Cards/CityDetails";

const DropDownInput = ({locations}) => {
    const [clicked, setClicked] = useState(false);
    const [selection, setSelection] = useState("");
    const inputElement = useRef(null);
    const inputElementId = useRef(null);

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleChange = (id, city) => {
        setSelection(id);
        setClicked(false);
        inputElement.current.value = city;
        inputElementId.current.value = id;
        console.log(selection);
    };

  return (
    <DropDown>
      <input type="text" placeholder="¿ A dónde vamos ?" onClick={handleClick} id="input-ciudad" ref={inputElement}/>
      <input type="hidden" name="ciudad" id="ciudad" ref={inputElementId}/>
      <Selections clicked={clicked} >
          {locations.map((location, i) => {
              const {id, city, province, country} = location;
            return (
              <Selection key={i} onClick={()=>{handleChange(id, city)}} id={id}>
                <CityDetails city={city} province={province} country={country}/>
                <hr/>
              </Selection>
            );
          })}
        </Selections>
    </DropDown>
  );
};
const DropDown = styled.div`
width: 100%;
position: relative;
z-index: 150;
input {
    font-size: 16px;
    padding: 0 10px;
    width: 100%;
    border-radius: 5px;
    height: 40px;
    background-color: var(--contrast--light);
    color: var(--contrast--dark);
    border: none;
}
@media only screen and (min-width: 768px) {
    width: 30%;
}
`;
const Selections = styled.ul`
    position: absolute;
    top: 30px;
    width: 80vw;
    padding: 10px;
    height: 400px;
    overflow-y: scroll;
    background-color: var(--contrast--light);
    display:${props => props.clicked ? "block" : "none"};
    &&::-webkit-scrollbar {
      width: 15px;
      background-color: var(--contrast--light);
    } 
    &&::-webkit-scrollbar-thumb {
      background-color: var(--contrast--color);
      border-radius: 10px;
    }
    @media only screen and (min-width: 768px) {
        width: 96%;
    }
`;

const Selection = styled.li`
    display: flex;
    height: 70px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    hr {
        width: 95%;
        border: 1px solid var(--contrast--color);
    }
`;

export default DropDownInput;
