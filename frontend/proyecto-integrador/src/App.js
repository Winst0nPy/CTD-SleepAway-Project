import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import React from 'react';
import Login from './Pages/Login';
import Product from './Pages/Product';
import Register from './Pages/Register';
import Layout from './Components/Layout';
import Booking from "./Pages/Booking";
import Successful from "./Pages/Successful";
import AddProduct from './Pages/AddProduct';
import { Welcome } from './Pages/Welcome';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/product/:id/booking" element={<Booking/>} />
          <Route path="/successful" element={<Successful/>}/>
          <Route path="/add-product" element={<AddProduct/>} />
          <Route path="/welcome" element={<Welcome/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
