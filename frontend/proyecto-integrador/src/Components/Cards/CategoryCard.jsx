import * as Styled from "./CategoryCard.styled"

const CategoryCard = ({image, title, count}) => {

    const PRODUCT_TITLE = (title.replace(title.slice(0,1), title.slice(0,1).toUpperCase()))

    return (

        <Styled.ContainerCard>
            <Styled.ImageContainer>
                <img src={image} alt="imagen"/>
            </Styled.ImageContainer>
            <Styled.CardContent>
                <Styled.TopProps>
                    <h3>{PRODUCT_TITLE}</h3>
                </Styled.TopProps>
                <Styled.Paragraph>{count+" "+(title)}</Styled.Paragraph>
            </Styled.CardContent>
        </Styled.ContainerCard>
    )

}



export default CategoryCard;