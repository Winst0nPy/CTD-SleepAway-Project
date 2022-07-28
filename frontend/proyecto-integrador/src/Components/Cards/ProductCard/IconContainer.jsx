import * as Styled from "./IconContainer.styled"
import handleIcons from "../../../Utils/handleIcons";

export default function IconContainer({features}) {
    const ICON_SIZE = 20
    const hasFeatures = features ? features : [];

    return (
        <Styled.IconContainer>
            {handleIcons(hasFeatures, ICON_SIZE, false)}
        </Styled.IconContainer>
    )
}

