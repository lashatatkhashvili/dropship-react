import React, { useState } from "react";
import PropTypes from "prop-types";
import productsReq from "../API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function CatalogSearch({ setProducts }) {
  const [search, setSearch] = useState(true);

  const searchToggle = () => {
    setSearch(!search);
  };

  const searchProd = (e) => {
    setTimeout(async () => {
      let products = await productsReq();
      let arr = products.data.filter(
        (item) =>
          item.title.toUpperCase().indexOf(e.target.value.toUpperCase()) !== -1
      );

      setProducts(arr);
    }, 1000);
  };

  return (
    <>
      <div className="content__header-form">
        <input
          type="text"
          className={`content__search ${search && "content__search--hide"}`}
          placeholder="search..."
          onChange={searchProd}
        />
        <button
          className={`content__form-btn ${!search && "content__search--hide"}`}
        >
          <span className="search-icon" onClick={searchToggle}>
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </button>

        <button
          className={`content__search-close content__search-close--hide ${
            search && "content__search--hide"
          }`}
          onClick={searchToggle}
        >
          <span className="close-icon">
            <FontAwesomeIcon icon={faTimes} onClick={searchToggle} />
          </span>
        </button>
      </div>
      <button className="content__header-btn content__header-btn--add">
        ADD TO INVENTORY
      </button>

      <button
        className={`content__header-btn content__add-btn--small ${
          !search && "content__search--hide"
        }`}
      >
        ADD
      </button>
    </>
  );
}

CatalogSearch.propTypes = {
  setProducts: PropTypes.func,
};
