import * as Styled from "./AddStyle.style"
import {useState} from "react";

const AddImage = ({index, handleClick, setImages, images, imageComponents, setImageComponents}) => {
    const [image, setImage] = useState({title:"", url:""});

    const deleteImage = () => {
        setImageComponents(imageComponents.filter((img, i) => i !== index))
        setImages(images.filter((img, i) => i !== index));
    };

    function handleChange(event) {
        const { name, value } = event.target
        setImage({
            ...image,
            [name]: value
        })
    }

    const addNewImage = () => {
        setImages([...images, image])
        handleClick()
    }

    return(
        <Styled.AddContainer>
            <Styled.LabelsContainer>
            <Styled.Label>Imagen
                <Styled.Input type="text"
                              placeholder="ej: https://www.google.com/img.jpg"
                              onChange={handleChange}
                              name={"url"}
                              {... index === imageComponents.length - 1 ? "" : "required"}/>
            </Styled.Label>
            </Styled.LabelsContainer>
            <Styled.ButtonContainer>
                {
                    index === imageComponents.length - 1
                        ? <Styled.Button style={{backgroundColor:"var(--contrast--color)"}} type="button" onClick={addNewImage}>+</Styled.Button>
                        : <Styled.Button style={{backgroundColor:"var(--contrast--dark)"}} type="button" onClick={deleteImage}>x</Styled.Button>
                }
            </Styled.ButtonContainer>
        </Styled.AddContainer>
    )
}
export default AddImage