import * as Styled from "./TitleContainer.styled"
import {handleStars} from "../../../Utils/handleStars"

export default function TitleContainer({title, value}){
    return (
    <div className="header-card">
        <div>
            <Styled.TopProps>
                <p>{title.toUpperCase()}</p>
                <Styled.Star>
                    {handleStars(value)}
                </Styled.Star>
            </Styled.TopProps>
        </div>
        <Styled.Rank>
            <Styled.RankNumber>
                {value*2}
            </Styled.RankNumber>
            <Styled.RankText>
                {(value === 0 || value < 4)
                    ? "Regular"
                    :"Excelente"}
            </Styled.RankText>
        </Styled.Rank>
    </div>
    )
}

