/** @format */

import delete_Logo from "../assets/xmark-solid.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function AddedToCartPopup({ setIsAddToCartClicked }) {
  return (
    <div className="addToCart_popup">
      <div className="addtocart_box">
        <span>Added to cart</span>
        <img
          className="delete_Logo"
          src={delete_Logo}
          alt="Delete Icon"
          onClick={() => setIsAddToCartClicked(false)}
        />
      </div>
      <div className="opt_buttons">
        <Link to="/cart/open">
          <Button text="VIEW CART" />
        </Link>
        <Button text="CHECKOUT" />
      </div>
    </div>
  );
}

export default AddedToCartPopup;
