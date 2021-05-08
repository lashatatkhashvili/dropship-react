import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function CatalogNav() {
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
      </form>
    </nav>
  );
}
