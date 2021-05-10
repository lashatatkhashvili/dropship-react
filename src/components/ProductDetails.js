import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

export default function ProductDetails({
  props,
  products,
  visible,
  setVisible,
}) {
  const id = props.location.search.split("=")[1];
  const product = id
    ? products.find((item) => item.id === Number(id))
    : products.find((item) => item.id === Number(visible));

  const myRef = useRef();

  const closeDetails = () => {
    window.history.replaceState(null, "New Page Title", "/catalog");
    setVisible(false);
  };

  useEffect(() => {
    id && setVisible(true);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (myRef.current && !myRef.current.contains(e.target)) {
        window.history.replaceState(null, "New Page Title", "/catalog");
        setVisible(false);
      }
    });

    return () => document.removeEventListener("mousedown", (e) => {});
  });

  return (
    <div className={visible ? "single-product" : "none"}>
      {product && (
        <div className="single-product__wrapper" ref={myRef}>
          <span className="close-modal" onClick={closeDetails}>
            &times;
          </span>
          <div className="single-product__content">
            <div className="single-product__left">
              <div className="single-product__prices">
                <p className="single-product__paragraph">RRP: $6</p>
                <p className="single-product__paragraph">Profit: 25% / $2</p>
                <p className="single-product__paragraph">
                  Cost: ${product.price}
                </p>
              </div>

              <div className="single-product__album">
                <img
                  src={product.image}
                  alt="product big"
                  className="single-product__image"
                />

                <img
                  src={product.image}
                  alt="product small"
                  className="single-product__image-small"
                />
              </div>
            </div>
            <div className="single-product__right">
              <h2 className="single-product__title">{product.title}</h2>

              <button className="single-product__btn">
                ADD TO MY INVENTORY
              </button>

              <h3 className="single-product__details">Product Details</h3>
              <p className="single-product__details-paragraph">
                {" "}
                {product.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

ProductDetails.propTypes = {
  products: PropTypes.array,
  setData: PropTypes.func,
  visible: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  setVisible: PropTypes.func,
};

ProductDetails.propTypes = {
  setVisible: PropTypes.func,
};
