import {FiShare2} from "react-icons/fi";
import HeartButton from "../../Buttons/HeartButton";
import Modal from "../../Modal/Modal";
import * as Styled from "./Gallery.style"

export default function Gallery({product, isFavorite, handleClick, setModalSliderOpen, modalSliderOpen}){
    return (
        <Styled.Gallery>
            <Styled.ButtonBig>
                <FiShare2 size={35} />
                <HeartButton
                    isLiked={isFavorite}
                    onClick={handleClick}
                    size={45}
                    color={"var(--contrast--dark)"}
                    position={"relative"}
                />
            </Styled.ButtonBig>
            <Styled.ImageContainer>
                {product.images.map((image, i) => {
                    return (
                        i === 0
                            ? <img className="image-grid-col-2 image-grid-row-2"
                                   key={i} src={image.url}
                                   alt="imagen"/>
                            : <img key={i}
                                   src={image.url}
                                   alt="imagen"
                                   className="other"/> );
                })}
                <Styled.ButtonGallery
                    onClick={ () => setModalSliderOpen(true) }>
                    Ver mas
                </Styled.ButtonGallery>
            </Styled.ImageContainer>
            <Modal openModal= {modalSliderOpen}
                   closeModal= {()=>setModalSliderOpen(false)}
                   images= {product?.images}/>
        </Styled.Gallery>

    )
}
