import * as Styled from "./FilterProducts.style";
import ProductCard from "../Cards/ProductCard/ProductCard";
import { Link, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import {handleRequestGet} from "../../Utils/handleRequest";
import { BsFillCaretLeftFill } from "react-icons/bs";

const FilterProducts = ({ apiPath, filterBy, titleIn }) => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const { id } = useParams();
  const cleanTitle = (title) =>
    title.replace(title.slice(0, 1), title.slice(0, 1).toUpperCase());

  useEffect(() => {
    handleRequestGet(apiPath + id)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    setTitle(products.length > 0 ? products[0][filterBy][titleIn] : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  const renderProducts = useMemo(
    () =>
      products.map((product, i) => {
        return (
          <ProductCard
            key={i}
            id={product.id}
            image={product.images}
            category={product.category.title}
            title={product.name}
            location={product.location.city}
            description={product.description}
            features={product.features}
            rating={product.ratings}
          />
        );
      }),
    [products]
  );

  return (
    <Styled.ProductSection>
      <Styled.HeaderSection>
        <Styled.Title>
         {cleanTitle(title)}
        </Styled.Title>
        <Link className="back" to="/">
          {" "}
          <BsFillCaretLeftFill />{" "}
        </Link>
      </Styled.HeaderSection>
      <hr />
      <Styled.ProductContainer>
        {products && renderProducts}
      </Styled.ProductContainer>
    </Styled.ProductSection>
  );
};
export default FilterProducts;
