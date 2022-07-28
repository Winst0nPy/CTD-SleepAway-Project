import {FaHeart, FaRegHeart} from "react-icons/fa";
import styled from "styled-components";

let thisSize = 30;
let thisColor = "";
let thisPosition = "absolute";

const HeartButton = ({ isLiked, onClick, size, color, position }) => {

    const Icon = isLiked ? FaHeart : FaRegHeart;

    size && (thisSize = size);
    color && (thisColor = color);
    position && (thisPosition = position);

    return (
        <Button onClick={onClick}
                style={{
                    fontSize: thisSize/1.5,
                    width: thisSize,
                    height: thisSize,
                    color: thisColor,
                    position: thisPosition }}>
            <Icon className="heart" />
        </Button>
    );
}


const Button = styled.button`
  background-color: transparent;
  border: none;
  top: 0;
  right: 10px;
  font-weight: 500;
  border-radius: 100%;
  margin: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;



export default HeartButton;