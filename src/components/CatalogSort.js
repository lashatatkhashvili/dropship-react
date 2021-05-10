import React from "react";
import PropTypes from "prop-types";
import productsReq from "../API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function CatalogSort({ setProducts }) {
  const sortProd = async (e) => {
    const products = await productsReq(e.target.value);

    const sorted = products.data.sort((a, b) => {
      if (e.target.value === "desc") {
        return a.price - b.price;
      } else if (e.target.value === "asc") {
        return b.price - a.price;
      } else {
        return a;
      }
    });
    setProducts(sorted);
  };
  return (
    <div className="content__sort">
      <label htmlFor="sort">
        <span className="alt-icon">
          {" "}
          <FontAwesomeIcon icon={faBars} />
        </span>
        Sort By:
      </label>
      <select className="content__sort-select" onChange={sortProd}>
        <option value="new">New Arrivals</option>
        <option value="asc">Price: High To Low</option>
        <option value="desc">Price: Low To High</option>
      </select>
    </div>
  );
}

CatalogSort.propTypes = {
  setProducts: PropTypes.func,
};
