import CategoryCard from "../Cards/CategoryCard";
import * as Styled from "./Category.styled"
import {Title} from '../../Shared/Title'
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {handleRequestGet} from "../../Utils/handleRequest";
import {API_PATHS} from "../../config";

export default function Category({categories}) {
    const navigate = useNavigate();
    const [categoriesCount, setCategoriesCount] = useState([]);

    useEffect(() => {
        handleRequestGet(API_PATHS.PRODUCT_CATEGORY_COUNT)
            .then(response => setCategoriesCount(response.data))
            .catch(error => console.log(error));
    }, [])

    if(!categoriesCount){
        return <div/>
    }

    const handleCategoryCount = (id) => {
        try {
            return categoriesCount.find(obj => obj.id === id).count;
        } catch(error) {
            console.log("...waiting")
        }
    }


    return (
    <Styled.CategorySection>
            <Title>Buscar por tipo de alojamiento</Title>
            <hr />
            <Styled.CategoryContainer>
                {categories.map( (category, i) => (
                <button key={i} onClick={()=>{ navigate(`/${category?.id}`)}}>
                    <CategoryCard
                        key={i}
                        count={handleCategoryCount(category.id)}
                        image={category.imageUrl}
                        title={category.title}
                        description={category.description}/>
                </button>
                ))}
        </Styled.CategoryContainer>
    </Styled.CategorySection>
    )
}
