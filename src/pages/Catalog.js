import React, { useState, useEffect } from "react";
import productsReq from "../API";
import Nav from "../components/Nav";
import CatalogNav from "../components/CatalogNav";
import ContentHeader from "../components/ContentHeader";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";
import "../styles/Catalog.css";

export default function Catalog(props) {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [burgerNav, setBurgerNav] = useState(false);

  useEffect(() => {
    productsReq().then((products) => {
      setLoading(false);
      setProducts(products.data);
    });
  }, []);

  return (
    <div className="wrapper">
      <Nav burgerNav={burgerNav} setBurgerNav={setBurgerNav} />
      <main className="main">
        <div className="catalog">
          <CatalogNav setProducts={setProducts} />
          <section className="content">
            <ContentHeader
              products={products}
              setProducts={setProducts}
              setBurgerNav={setBurgerNav}
              setLoading={setLoading}
            />

            <Products
              loading={loading}
              data={products}
              setData={setProducts}
              setVisible={setVisible}
            />
          </section>
        </div>
        <ProductDetails
          props={props}
          products={products}
          visible={visible}
          setVisible={setVisible}
        />
      </main>
    </div>
  );
}
