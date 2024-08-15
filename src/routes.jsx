import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainContent from "./components/MainContent";
import CategoryProducts from "./components/CategoryProducts";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <MainContent /> },
			{ path: "/list/:list", element: <CategoryProducts /> },
			{ path: "/cart/:cartStatus", element: <Cart /> },
			{ path: "/detail/:category/:product", element: <ProductDetail /> },
		],
		errorElement: <ErrorPage />,
	},
]);

export default appRouter;
