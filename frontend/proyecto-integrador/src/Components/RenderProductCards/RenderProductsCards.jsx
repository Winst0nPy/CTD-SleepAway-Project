import ProductCard from "../Cards/ProductCard/ProductCard";
import {Title} from "../../Shared/Title";
import * as Styled from "./RenderProductCards.style"

export default function RenderProductsCards({products}){

    return (
        <>
            <Styled.LodgingSection>
                <Title>Recomendaciones</Title>
                <hr />
                    <Styled.LodgingContainer>
                        {
                            products.map((product, i) => (
                            <ProductCard
                                key={i}
                                id={product.id}
                                image={product.images}
                                category={product.category.title}
                                title={product.name}
                                location={product.location.city}
                                description={product.description}
                                features={product.features}
                                rating={product.ratings}/>
                            ))
                       }
                        </Styled.LodgingContainer>
                    </Styled.LodgingSection>
        </>
    )
}