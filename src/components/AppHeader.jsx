import { useContext } from "react";
import { CartContext } from "../App";
import { Link, useParams } from "react-router-dom";

import HeadingNavList from "./HeadingNavList";
import cartLogo from "../assets/cart-shopping-solid.svg";
import goBackLogo from "../assets/arrow-left-solid.svg";

function AppHeader() {
	const { cartItems } = useContext(CartContext);
	const params = useParams();
	const showCategoryNavList = params.cartStatus;
	const showCounter = cartItems.length > 0;
	const showGoBackOption = params.product;
	const totalProductToBuyCount = cartItems.reduce(
		(acc, item) => acc + Number(item.quantity),
		0
	);
	return (
		<div>
			<div className="main_head">
				<div>
					{showGoBackOption && (
						<Link to={`/list/${params.category}`}>
							<img
								className="go_back_logo "
								src={goBackLogo}
								alt="Go Back Logo"
							/>
						</Link>
					)}
				</div>
				<h1>
					<Link to="/">SHOP</Link>
				</h1>
				<Link className="cart_box" to="/cart/open">
					<img className="cart_logo " src={cartLogo} alt="Cart" />
					{showCounter && (
						<span className="cart_logo_counter">{totalProductToBuyCount}</span>
					)}
				</Link>
			</div>
			{!showCategoryNavList && <HeadingNavList />}
		</div>
	);
}

export default AppHeader;
