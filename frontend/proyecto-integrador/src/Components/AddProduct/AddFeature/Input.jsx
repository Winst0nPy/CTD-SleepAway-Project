import * as Styled from "../AddStyle.style";

export default function Input ({title, name, placeholder, handleChange, required}) {
    return (
        <Styled.Label>{title}
            <Styled.Input type="text"
                          placeholder={placeholder}
                          onChange={handleChange}
                          name={name}
                          {... required ? required : ""}/>
        </Styled.Label>
    )
};