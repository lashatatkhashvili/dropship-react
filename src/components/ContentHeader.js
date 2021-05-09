import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faCheck,
  faSearch,
  faTimes,
  faBars,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

export default function ContentHeader({ checked, setChecked, products }) {
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
              let ids = [];
              products.map((item) => ids.push(item.id));
              setChecked(ids);
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
            id="toggle-add"
          >
            <span className="check-icon">
              <FontAwesomeIcon icon={faCheck} />
            </span>
          </button>
        </div>

        <button
          className={`content__header-btn ${
            checked.length <= 0 && "content__header-btn--clear"
          }`}
          onClick={() => setChecked([])}
        >
          Clear Selected
        </button>

        <div className="content__header-right">
          <div className="content__header-form">
            <input
              type="text"
              id="search"
              className="content__search content__search--hide"
              placeholder="search..."
            />
            <button className="content__form-btn" id="search-btn">
              <span className="search-icon">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </button>

            <button
              className="content__search-close content__search--hide content__search-close--hide"
              id="search-hide"
            >
              <span className="close-icon">
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </button>
          </div>
          <button className="content__header-btn content__header-btn--add">
            ADD TO INVENTORY
          </button>

          <button className="content__header-btn content__add-btn--small">
            ADD
          </button>

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
  checked: PropTypes.array,
  products: PropTypes.array,
  setChecked: PropTypes.func,
};
