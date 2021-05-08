import React from "react";
import PropTypes from "prop-types";

export default function Products({ loading, data, checked, setChecked }) {
  const checkProduct = (id, e) => {
    if (checked.includes(id)) {
      let arr = [...checked];
      arr.splice(checked.indexOf(id), 1);
      setChecked([...arr]);
    } else {
      setChecked([...checked, id]);
    }
  };

  return (
    <div className="products">
      <div className="products-wrapper">
        {data &&
          data.map((item) => {
            return (
              <div
                className={`product ${
                  checked.includes(item.id) && "product--border"
                }`}
                key={item.id}
              >
                <div
                  className={`product__add ${
                    checked.includes(item.id) && "product__add--click"
                  }`}
                >
                  <div className="round">
                    <input
                      type="checkbox"
                      id={item.id}
                      className="product__check"
                      onChange={() => checkProduct(item.id)}
                      checked={checked.includes(item.id)}
                    />
                    <label htmlFor={item.id}></label>
                  </div>

                  <label
                    htmlFor="check"
                    className={`product__check-label ${
                      checked && "product__check-label--non"
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
  checked: PropTypes.array,
  setChecked: PropTypes.func,
};
