import styled from "styled-components";
import Navbar from "./Navbar";
import PrimaryButton from "../Buttons/PrimaryButton";


const ButtonNav = ({ buttons, open, handleClick }) => {
    return (
        <>
            <Buttons>
                {buttons.map(({title, route}) => (
                    <PrimaryButton
                    title={title}
                    route={route}
                    key={title}
                    />
                ))}
            </Buttons>
            <Navbar open={open} buttons={buttons} handleClick={handleClick}/>
        </>
    );
}

const Buttons = styled.div`
display: none;
@media only screen and (min-width: 768px) {
   display: flex;
    justify-content: space-between;
    margin-right: 10px;
  }
`;
export default ButtonNav;