import React from "react";
import Nav from "../components/Nav";
import CatalogNav from "../components/CatalogNav";
import "../styles/Catalog.css";

export default function Catalog() {
  return (
    <div className="wrapper">
      <Nav />
      <main className="main">
        <div className="catalog">
          <CatalogNav />
        </div>
      </main>
    </div>
  );
}
