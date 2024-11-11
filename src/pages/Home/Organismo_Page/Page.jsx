import React from "react";
import Header from "../ComponentesHeader/Moleculas/Header";
import ProductComponent from "../ComponentesAPI/Pages/Product";
import "./Page.css";

const Page = () => {
  return (
    <div className="content">
      <Header />
      <div className="products">
        <ProductComponent />
      </div>
    </div>
  );
};

export default Page;
