import React, { useState } from "react";
import RangeSlider from "./RangeSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default function CatalogNav({ products, setProducts }) {
  const [reset, setReset] = useState(false);

  const resetFunc = (e) => {
    e.preventDefault();
    setReset(!reset);
  };
  return (
    <nav className="catalog__nav">
      <div className="catalog__nav-title">
        Choose Niche
        <span className="angle-icon">
          {" "}
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </div>
      <div className="catalog__nav-title catalog__nav-title--category">
        Choose Category
        <span className="angle-icon">
          {" "}
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </div>

      <form className="catalog__nav-form">
        <select className="catalog__nav-select">
          <option value="from">Ship From</option>
        </select>
        <select className="catalog__nav-select">
          <option value="to">Ship To</option>
        </select>
        <select className="catalog__nav-select">
          <option value="sup">Select Supplier</option>
        </select>
        <RangeSlider
          name="Price Range"
          type="$"
          min={1}
          max={1000}
          products={products}
          setProducts={setProducts}
          reset={reset}
        />
        <RangeSlider
          name="Pofit Range"
          type="%"
          min={1}
          max={98}
          products={products}
          setProducts={setProducts}
          reset={reset}
        />
        <button className="catalog__nav-btn" onClick={resetFunc}>
          Reset Filter
        </button>
      </form>
    </nav>
  );
}

RangeSlider.propTypes = {
  ptoducts: PropTypes.array,
  setProducts: PropTypes.func,
};
