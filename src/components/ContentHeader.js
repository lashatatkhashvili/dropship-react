import React from "react";
import PropTypes from "prop-types";
import CatalogSearch from "./CatalogSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faCheck,
  faBars,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

export default function ContentHeader({ products, setProducts }) {
  const checked = products.filter((item) => item.checked);

  const toggleAdd = () => {
    let arr = [...products];
    arr.map((item) => {
      checked.length >= 0 && (item.checked = true);
      checked.length === products.length && (item.checked = false);
      return arr;
    });
    setProducts(arr);
  };

  return (
    <div className="content__header-wrapper">
      <header className="content__header">
        <div className="content__selected-items">
          <button className="content__header-btn content__header-btn--filter">
            <span className="filter-text">Filter</span>
            <span className="filter-icon">
              <FontAwesomeIcon icon={faFilter} />
            </span>
          </button>
          <button
            className="content__header-btn content__header-btn--big"
            onClick={() => {
              let arr = [...products];
              arr.map((item) => (item.checked = true));
              setProducts(arr);
            }}
          >
            SELECT ALL
          </button>
          <span className="content__selected-separate"></span>
          <span className="content__selected-title">
            <span className="content__selected-number">
              selected <span id="count">{checked.length}</span> out of
            </span>
            <span className="content__products"> 274,290 products</span>
          </span>
          <button
            className="content__header-btn content__header-btn--small"
            onClick={toggleAdd}
          >
            <span className="check-icon">
              <FontAwesomeIcon icon={faCheck} />
            </span>
          </button>
        </div>

        <button
          className={`content__header-btn ${
            checked.length <= 0 && "content__header-btn--clear"
          } none`}
          onClick={() => {
            let arr = [...products];
            arr.map((item) => (item.checked = false));
            setProducts(arr);
          }}
        >
          Clear Selected
        </button>

        <div className="content__header-right">
          <CatalogSearch products={products} setProducts={setProducts} />

          <button className="nav-icon">
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className="help">
            <button className="help__btn">
              <FontAwesomeIcon icon={faQuestion} />
            </button>
          </div>
        </div>
      </header>

      <div className="content__sort">
        <label htmlFor="sort">
          <span className="alt-icon">
            {" "}
            <FontAwesomeIcon icon={faBars} />
          </span>
          Sort By:
        </label>
        <select id="sort" className="content__sort-select">
          <option value="new">New Arrivals</option>
          <option value="high">Price: High To Low</option>
          <option value="low">Price: Low To High</option>
        </select>
      </div>
    </div>
  );
}

ContentHeader.propTypes = {
  products: PropTypes.array,
  setProducts: PropTypes.func,
};
