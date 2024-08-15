import { useState, useContext } from "react";
import { CartContext } from "../App";
import { useParams } from "react-router-dom";
import Button from "./Button";
import AddedToCartPopup from "./AddedToCartPopup";

import category_list from "../data/categoryList";
const sizeOption = ["XS", "S", "M", "L", "XL"];
const quantityOption = Array.from({ length: 15 }, (_, index) => index + 1);

function ProductDetail() {
	const [size, setSize] = useState("M");
	const [quantity, setQuantity] = useState(1);
	const { cartItems, setCartItems } = useContext(CartContext);
	const [isAddToCartClicked, setIsAddToCartClicked] = useState(false);

	const params = useParams();
	const category = category_list.find(
		(cat) => cat.category === params.category
	);
	const product = category.products.find(
		(product) => product.name === params.product
	);

	function handleAddToCart() {
		setIsAddToCartClicked(true);
		const addedItemIndex = cartItems.findIndex(
			(item) => item.name === product.name && item.size === size
		);

		if (addedItemIndex === -1) {
			const newItem = { ...product, quantity: Number(quantity), size };
			setCartItems([...cartItems, newItem]);
		} else {
			const updatedItems = [...cartItems];
			updatedItems[addedItemIndex].quantity = Number(quantity);
			setCartItems(updatedItems);
		}
	}

	return (
		<div className="product_detail_box">
			<img className="product_img" src={product.image} alt={product.image} />
			<div className="product_description">
				<h2>{product.title}</h2>
				<p className="product_price">${product.price}</p>
				<div className="product_size">
					<label>Size: </label>
					<select value={size} onChange={(e) => setSize(e.target.value)}>
						{sizeOption.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
				</div>
				<div className="product_quantity">
					<label>Quantity: </label>
					<select
						value={quantity}
						onChange={(e) => setQuantity(e.target.value)}
					>
						{quantityOption.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
				</div>
				<div className="extra_description">
					<h3>Description:</h3>
					<p>
						A versatile full-zip that you can wear all day long and even to the
						gym. This technical shell features moisture-wicking fabric, added
						stretch, and a hidden pocket for your smartphone or media player.
					</p>

					<h4>Features:</h4>
					<ul>
						<li>100% polyester.</li>
						<li>Smooth, technical front with textured mesh back.</li>
						<li>Drawstring bottom for adjustable fit.</li>
						<li>Raglan sleeves.</li>
						<li>
							Available in forest green with the white Google logo embroidered
							at left chest.
						</li>
					</ul>
				</div>

				<div onClick={handleAddToCart}>
					<Button text="ADD TO CART" />
				</div>
			</div>
			{isAddToCartClicked && (
				<AddedToCartPopup setIsAddToCartClicked={setIsAddToCartClicked} />
			)}
		</div>
	);
}

export default ProductDetail;
