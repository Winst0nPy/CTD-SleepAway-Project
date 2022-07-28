import * as Styled from "./AddStyle.style"
import Input from "./AddFeature/Input";
import {useState} from "react";

const AddFeature = ({index, setFeatureComponents, featureComponents, handleClick, setFeatures, features}) => {
    const [feature, setFeature] = useState({name: "", react_icon: ""})
    const deleteFeature = () => {
        setFeatureComponents(featureComponents.filter((feature, i) => i !== index));
        setFeatures(features.filter( (feature, i) => i !== index))
    };
    function handleChange(event) {
        const { name, value } = event.target
        setFeature({
            ...feature,
            [name]: value
        })
    }
    const addNewFeature = () => {
        setFeatures([...features, feature])
        handleClick()
    }

    return(
        <Styled.AddContainer>
            <Styled.LabelsContainer>
                <Input title={"Nombre"}
                       placeholder={"ej: Wifi"}
                       name={"name"}
                       handleChange={handleChange}
                       required={index !== featureComponents.length - 1}/>
                <Input title={"Icono"}
                       placeholder={"ej: Fa-wifi"}
                       name={"react_icon"}
                       handleChange={handleChange}
                       required={index !== featureComponents.length - 1}/>
            </Styled.LabelsContainer>
            <Styled.ButtonContainer>
                {
                    index === featureComponents.length - 1
                        ? <Styled.Button style={{backgroundColor:"var(--contrast--color)"}}
                                         type="button" onClick={addNewFeature}>+</Styled.Button>
                        : <Styled.Button style={{backgroundColor:"var(--contrast--dark)"}}
                                         type="button" onClick={deleteFeature}>x</Styled.Button>
                }
            </Styled.ButtonContainer>
        </Styled.AddContainer>
    )
}
export default AddFeature;


