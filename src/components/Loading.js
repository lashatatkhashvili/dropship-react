import React from "react";
import PropTypes from "prop-types";

export default function Loading({ quantity }) {
  return [...Array(quantity)].map((el, index) => {
    return (
      <div className="product" style={{ minHeight: "280px" }} key={index}>
        <div className="product__image">
          <img src="./assets/load.gif" width="50" height="50" alt="loading" />
        </div>
      </div>
    );
  });
}

Loading.propTypes = {
  Quantity: PropTypes.number,
};
