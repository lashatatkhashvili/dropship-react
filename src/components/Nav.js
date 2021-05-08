import React from "react";
import { Link } from "react-router-dom";
import { Dashboard, Catalog, Inventory } from "../icons";
import "../styles/Nav.css";

export default function Nav() {
  const pathName = window.location.pathname;
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item nav__list-item--logo">
          <img src="./assets/logo.png" alt="logo" />
        </li>

        <li className="nav__list-item nav__list-item--profile ">
          <img src="./assets/profile.jpg" alt="profile" />
        </li>

        <li className="nav__list-item nav__list-item--svg">
          <Link to="/dashboard">
            <Dashboard />
          </Link>
        </li>

        <li className="nav__list-item nav__list-item--svg">
          <Link to="/catalog">
            <Catalog
              stroke={pathName === "/catalog" ? " #61d5df" : "#49547d"}
            />
          </Link>
        </li>

        <li className="nav__list-item nav__list-item--svg">
          <Inventory />
        </li>

        <li className="nav__list-item nav__list-item--svg">
          <img src="./assets/cart.svg" alt="cart" />
        </li>

        <li className="nav__list-item nav__list-item--svg">
          <img src="./assets/orders.svg" alt="orders" />
        </li>

        <li className="nav__list-item nav__list-item--svg">
          <img src="./assets/transactions.svg" alt="transactions" />
        </li>

        <li className="nav__list-item nav__list-item--svg">
          <img src="./assets/stores.svg" alt="stores" />
        </li>
      </ul>
    </nav>
  );
}
