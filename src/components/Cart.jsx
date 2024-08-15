import { useContext } from "react";
import { CartContext } from "../App";
import CartItem from "./CartItem";

function Cart() {
	const { cartItems, setCartItems } = useContext(CartContext);

	const totalPrice = cartItems.reduce(
		(acc, item) => acc + Number(item.quantity) * item.price,
		0
	);

	if (cartItems.length === 0) {
		return (
			<p className="cart_heading" style={{ textAlign: "center" }}>
				There is no Item in cart. Please add Something in your cart
			</p>
		);
	}

	return (
		<div className="cart_section">
			<h2 className="cart_heading">Your Cart</h2>
			<p className="cart_status">({cartItems.length} items)</p>
			{cartItems.map((cartItem) => (
				<CartItem
					key={cartItem.name}
					cartItem={cartItem}
					setCartItems={setCartItems}
				/>
			))}
			<div className="cart_total_section">
				<div>
					<p></p>
				</div>
				<div className="total_checkout_box">
					<span className="cart_total">Total: ${totalPrice.toFixed(2)}</span>
					<button className="checkout_btn">CHECKOUT</button>
				</div>
			</div>
		</div>
	);
}

export default Cart;
