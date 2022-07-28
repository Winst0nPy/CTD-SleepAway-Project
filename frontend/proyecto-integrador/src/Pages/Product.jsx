import styled from "styled-components";
import React, {useCallback, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Maps from "../Components/LocationMaps/Maps";
import Feature from "../Components/Product/Features/Feature";
import ProductPolicy from "../Components/Product/Policy/ProductPolicy";
import ProductCalendar from "../Components/Product/ProductCalendar/ProductCalendar";
import {handleRequestGet} from "../Utils/handleRequest";
import { API_PATHS } from "../config";
import Top from "../Components/Product/Top/Top";
import Gallery from "../Components/Product/Gallery/Gallery";
import Location from "../Components/Product/Location";
import Slider from "../Components/Product/Slider";

const Product = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [modalSliderOpen, setModalSliderOpen] = useState(false);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const handleClick = useCallback( () => {
      setIsFavorite(!isFavorite);
  }, [isFavorite] )

  useEffect(() => {
      handleRequestGet(`${API_PATHS.PRODUCT}/${id}`)
          .then(response => setProduct(response.data))
          .catch(error => console.log(error))
  }, [id]);

  if(!product){
      return (<div/>)
  }

  return (
    <div>
        <Top
            categoryTitle={product.category.title}
            productName={product.name}
        />
        <Location
            city={product.location.city}
            province={product.location.province}
            country={product.location.country}
            ratings={product.ratings}
        />
        <Slider
            images={product.images}
            isFavorite={isFavorite}
            handleClick={handleClick}
        />
        <Gallery
            product={product}
            isFavorite={isFavorite}
            handleClick={handleClick}
            setModalSliderOpen={setModalSliderOpen}
            modalSliderOpen={modalSliderOpen}/>
        <Description>
            <Title>
                Alojate en {product.name}
            </Title>
            <Text>
                {product.description}
            </Text>
        </Description>
        <Feature features={product.features}/>
        <ProductCalendar product={product}/>
        <Maps latitude={product.latitude}
                longitude={product.longitude}
                street={product.location.street}
                number={product.location.number}
                province={product.location.province}
                city={product.location.city}/>
        <ProductPolicy policy={product.policy}/>
    </div>
  );
};


const Description = styled.div`
  color: var(--contrast--light);
`;

const Title = styled.h1`
  display: flex;
  align-self: flex-start;
  margin: 25px;
  color: var(--contrast--dark);
  font-size: 25px;
`;

const Text = styled.p`
  display: flex;
  align-self: flex-start;
  margin: 25px;
  color: var(--contrast--black);
  font-size: 18px;
`;

export default Product;
