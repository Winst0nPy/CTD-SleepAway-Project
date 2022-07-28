import { useEffect, useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {handleRequestGetWithParams} from "../../Utils/handleRequest";
import * as Styled from "./FilterProducts.style";
import ProductCard from "../Cards/ProductCard/ProductCard";
import { BsFillCaretLeftFill } from "react-icons/bs";

const FilterProductByDate = ({ apiPath, filterBy, titleIn }) => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  let [searchParams] = useSearchParams();
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const id = searchParams.get("id");
  const cleanTitle = (title) =>
    title.replace(title.slice(0, 1), title.slice(0, 1).toUpperCase());
  const cleanDate = `${cleanTitle(title)} del ${startDate} al ${endDate}`;

  const [filterDate] = useState({
    city_id: id,
    start_date: startDate,
    end_date: endDate,
  });

  useEffect(() => {
    handleRequestGetWithParams(apiPath, {params: filterDate})
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, [filterDate, apiPath]);

  useEffect(() => {
    setTitle(products.length > 0 ? products[0][filterBy][titleIn] : "No se han encontrado coincidencias");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  const renderProducts = useMemo(() =>
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
        <Styled.Title>{cleanDate}</Styled.Title>
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
export default FilterProductByDate;