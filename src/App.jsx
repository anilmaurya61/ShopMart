import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "./components/AppHeader";

export const CartContext = createContext();

function App() {
	const [cartItems, setCartItems] = useState([]);

	return (
		<CartContext.Provider value={{ cartItems, setCartItems }}>
			<AppHeader />
			<Outlet />
		</CartContext.Provider>
	);
}

export default App;
