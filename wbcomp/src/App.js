import React from "react";
import Footer from "./Component/Footer";
import Nabar from "./Component/Navbar";
import Home from "./Component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProdDetatils from "./Component/ProdDetails";
import Login from "./Component/Login";
import UserReg from "./Component/UserReg";
import ProductAdd from "./Miscellineous/ProductAdd";

function App() {


  return (
    <>
      <Nabar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProdDetatils />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<UserReg />} />
        <Route path="/newprod" element={<ProductAdd />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
