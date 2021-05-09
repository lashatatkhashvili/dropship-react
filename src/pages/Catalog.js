import React, { useState, useEffect } from "react";
import productsReq from "../API";
import Nav from "../components/Nav";
import CatalogNav from "../components/CatalogNav";
import ContentHeader from "../components/ContentHeader";
import Products from "../components/Products";
import "../styles/Catalog.css";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productsReq().then((products) => {
      setLoading(false);
      setProducts(products.data);
    });
  }, []);

  return (
    <div className="wrapper">
      <Nav />
      <main className="main">
        <div className="catalog">
          <CatalogNav />
          <section className="content">
            <ContentHeader products={products} setProducts={setProducts} />
            <Products loading={loading} data={products} setData={setProducts} />
          </section>
        </div>
      </main>
    </div>
  );
}
