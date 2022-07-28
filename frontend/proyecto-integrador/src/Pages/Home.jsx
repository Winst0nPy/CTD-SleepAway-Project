import SearchBar from "../Components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { handleRequestGets } from "../Utils/handleRequest";
import { API_PATHS } from "../config";
import Category from "../Components/Category/Category";
import RenderProductsCards from "../Components/RenderProductCards/RenderProductsCards";
import { Route, Routes, useLocation } from "react-router-dom";
import FilterProducts from "../Components/FilterProducts/FilterProducts";
import FilterProductByDate from "../Components/FilterProducts/FilterProductByDate";
import UserBookings from "../Components/UserBookings/UserBookings";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [locations, setLocations] = useState([]);
  const { CATEGORY, PRODUCT_RANDOM, LOCATION } = API_PATHS;
  const location = useLocation();
  useEffect(() => {
    handleRequestGets([CATEGORY, PRODUCT_RANDOM, LOCATION], [setCategories, setProducts, setLocations]);
  }, [CATEGORY, LOCATION, PRODUCT_RANDOM]);

  if (!products || !locations || !categories) {
    return <div />;
  }

  return (
    <>
      {" "}
      {location.pathname === "/" ? (
        <>
          <SearchBar locations={locations} />
          <Category categories={categories} products={products} />
          <RenderProductsCards products={products} />
        </>
      ) : (
        <>
          <SearchBar locations={locations} />
          <Routes>
            <Route
              path="/:id-:startDate-:endDate"
              element={
                <FilterProductByDate
                  apiPath={API_PATHS.PRODUCT_DATE_LOCATION}
                  filterBy={"location"}
                  titleIn={"city"}
                />
              }
            />
            <Route
              path="/search/:id"
              element={
                <FilterProducts
                  apiPath={API_PATHS.PRODUCT_LOCATION} 
                  filterBy={"location"} 
                  titleIn={"city"}/>
              }
            />
            <Route
              path="/:id"
              element={
                <FilterProducts
                  apiPath={API_PATHS.PRODUCT_CATEGORY}
                  filterBy={"category"}
                  titleIn={"title"}
                />
              }
            />
            <Route
                path="/mis-reservas"
                element={<UserBookings/>}
            />
          </Routes>
        </>
      )}
    </>
  );
};
export default Home;
