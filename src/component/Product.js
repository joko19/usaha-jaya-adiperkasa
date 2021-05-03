import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Product() {
  return (
    <div>
      <Header />

      <div className="cover">
        <h1 className="cover-title">Produk Kami</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
