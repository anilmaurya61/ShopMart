/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

function ProductCard({ product }) {
	const { cartItems, setCartItems } = useContext(CartContext);

	function handleAddToCart() {
		product.quantity = 1;
		product.size = "M";
		setCartItems([...cartItems, product]);
	}

	return (
		<div className="product_cart">
			<Link to={`/detail/${product.category}/${product.name}`}>
				<img src={product.image} alt={product.title} />
				<h3>{product.title}</h3>
				<span>${product.price}</span>
			</Link>
			<button onClick={handleAddToCart}>
				{!cartItems.includes(product) ? "Add to Cart" : "Added   ✅"}
			</button>
		</div>
	);
}

export default ProductCard;
