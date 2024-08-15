/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import { Link } from "react-router-dom";

import delete_Logo from "../assets/xmark-solid.svg";
const quantityOption = Array.from({ length: 15 }, (_, index) => index + 1);

function CartItem({ cartItem }) {
	const [qty, setQty] = useState(cartItem.quantity);
	const { cartItems, setCartItems } = useContext(CartContext);

	function handleDelete() {
		const newCartItemsList = cartItems.filter(
			(item) => !(item.name == cartItem.name && item.size == cartItem.size)
		);
		setCartItems(newCartItemsList);
	}

	useEffect(() => {
		const updatedCartItemsList = cartItems.map((item) => {
			if (item.name === cartItem.name && item.size === cartItem.size) {
				return { ...item, quantity: qty };
			}
			return item;
		});

		setCartItems(updatedCartItemsList);
	}, [cartItem.name, cartItem.size, qty, setCartItems]);

	return (
		<div className="cart_item">
			<Link to={`/detail/${cartItem.category}/${cartItem.name}`}>
				<div className="productDetail">
					<img
						className="product_image"
						src={cartItem.image}
						alt={cartItem.title}
					/>
					<h2>{cartItem.title}</h2>
				</div>
			</Link>
			<div className="cartItem_qty">
				<label>Qty: </label>
				<select value={qty} onChange={(e) => setQty(e.target.value)}>
					{quantityOption.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
			</div>
			<p>Size: {cartItem.size}</p>
			<p>${cartItem.price}</p>
			<img
				onClick={handleDelete}
				className="delete_Logo"
				src={delete_Logo}
				alt="Delete Icon"
			/>
		</div>
	);
}

export default CartItem;
