import * as Styled from "./Input.style"
import WarningLabel from "./WarningLabel";

export default function Input({labelText, value, onChange, htmlFor, msgEmpty="", msgError="", type="text"}){
    return (
        <div>
            <Styled.Label htmlFor={htmlFor}>{labelText}
                <Styled.Input type={type} id={htmlFor} value={value}
                       onChange={onChange} />
                {msgEmpty && <WarningLabel className={"hidden empty"} label={msgEmpty}/>}
                {msgError && <WarningLabel className={"hidden error"} label={msgError}/>}
            </Styled.Label>
        </div>
    )
}