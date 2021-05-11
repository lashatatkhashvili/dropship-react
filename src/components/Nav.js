import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Dashboard,
  Catalog,
  Inventory,
  Cart,
  Orders,
  Transactions,
  Store,
  Close,
} from "../icons";
import "../styles/Nav.css";

export default function Nav({ burgerNav, setBurgerNav }) {
  const [anim, setAnim] = useState(false);
  const pathName = window.location.pathname;
  const myRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      burgerNav && setAnim(true);
    }, 200);
  }, [burgerNav]);

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (
        myRef.current &&
        !myRef.current.contains(e.target) &&
        e.target.localName !== "svg" &&
        e.target.localName !== "path"
      ) {
        setTimeout(() => {
          setBurgerNav && setBurgerNav(false);
        }, 500);

        setAnim(false);
      }
    });

    return () => document.removeEventListener("mousedown", (e) => {});
  });

  return (
    <header className={burgerNav ? "header" : ""}>
      <nav className={anim ? "nav anime" : "nav"} ref={myRef}>
        <ul className="nav__list">
          <li className="nav__list-item nav__list-item--logo">
            <img src="./assets/logo.png" alt="logo" />
            <span
              onClick={() => {
                setTimeout(() => {
                  setBurgerNav(false);
                }, 500);

                setAnim(false);
              }}
            >
              <Close />
            </span>
          </li>

          <li className="nav__list-item nav__list-item--profile ">
            <p className="nav__paragraph">Profile</p>
            <img src="./assets/profile.jpg" alt="profile" />
          </li>

          <li className="nav__list-item nav__list-item--svg">
            <p className="nav__paragraph">Dashboard</p>
            <Link to="/dashboard">
              <Dashboard />
            </Link>
          </li>

          <li className="nav__list-item nav__list-item--svg">
            <p className="nav__paragraph">Catalog</p>
            <Link to="/catalog">
              <Catalog
                stroke={pathName === "/catalog" ? " #61d5df" : "#49547d"}
              />
            </Link>
          </li>

          <li className="nav__list-item nav__list-item--svg">
            <p className="nav__paragraph">Inventory</p>
            <Inventory />
          </li>

          <li className="nav__list-item nav__list-item--svg">
            <p className="nav__paragraph">Cart</p>
            <Cart />
          </li>

          <li className="nav__list-item nav__list-item--svg">
            <p className="nav__paragraph">Orders</p>
            <Orders />
          </li>

          <li className="nav__list-item nav__list-item--svg">
            <p className="nav__paragraph">Transactions</p>
            <Transactions />
          </li>

          <li className="nav__list-item nav__list-item--svg">
            <p className="nav__paragraph">Stores List</p>
            <Store />
          </li>
        </ul>
      </nav>
    </header>
  );
}

Nav.propTypes = {
  burgerNav: PropTypes.bool,
  setBurgerNav: PropTypes.func,
};
