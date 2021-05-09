import React from "react";
import PropTypes from "prop-types";

export default function Products({ loading, data, setData }) {
  const checkProduct = (i) => {
    let arr = [...data];
    arr[i].checked = data[i].checked ? false : true;
    setData([...arr]);
  };

  return (
    <div className="products">
      <div className="products-wrapper">
        {data &&
          data.map((item, i) => {
            return (
              <div
                className={`product ${item.checked && "product--border"}`}
                key={item.id}
              >
                <div
                  className={`product__add ${
                    item.checked && "product__add--click"
                  }`}
                >
                  <div className="round">
                    <input
                      type="checkbox"
                      id={item.id}
                      className="product__check"
                      onChange={() => checkProduct(i)}
                      checked={item.checked === true}
                    />
                    <label htmlFor={item.id}></label>
                  </div>

                  <label
                    htmlFor="check"
                    className={`product__check-label ${
                      item.checked && "product__check-label--non"
                    }`}
                  >
                    Add To Inventory
                  </label>
                </div>
                <div className="product__image">
                  <img
                    src={item.image}
                    alt="product "
                    height="127"
                    width="191"
                  />
                </div>
                <div className="product__name">
                  <h3 className="product__name-heading">{item.title}</h3>
                </div>
                <div className="product__info">
                  <p className="product__info-paragraph">RRP: $6</p>
                  <p className="product__info-paragraph">Profit: 25% / $2</p>
                  <p className="product__info-paragraph">Cost: ${item.price}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

Products.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array,
  setData: PropTypes.func,
};
