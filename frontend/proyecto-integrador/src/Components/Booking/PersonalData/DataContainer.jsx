import * as Styled from "./PersonalData.style";

export default function DataContainer({type="text", id, value, textContent}){
    return (
        <div>
            <Styled.Label htmlFor={id}>{textContent}</Styled.Label>
            <Styled.Input
                type={type}
                id={id}
                value={value}
                readOnly={true}
            />
        </div>
    )
}