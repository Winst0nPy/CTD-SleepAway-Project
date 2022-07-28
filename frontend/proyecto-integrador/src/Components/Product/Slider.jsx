import {FiShare2} from "react-icons/fi";
import HeartButton from "../Buttons/HeartButton";
import SlideShowPhone from "../SlideShows/SlideShowPhone";
import * as Styled from "./Slider.style"

export default function Slider({images, isFavorite, handleClick}){
    return (
        <Styled.Slider>
            <Styled.ButtonsPhone>
                <FiShare2 size={35} />
                <HeartButton
                    isLiked={isFavorite}
                    onClick={handleClick}
                    size={45}
                    color={"var(--contrast--light)"}
                    position={"relative"}
                />
            </Styled.ButtonsPhone>
            <SlideShowPhone
                images={images} />
        </Styled.Slider>
    )
}