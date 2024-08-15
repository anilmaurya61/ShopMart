import { useParams } from "react-router-dom";
import CategoryHero from "./CategoryHero";
import ProductCard from "./ProductCard";
import ErrorPage from "./ErrorPage";
import category_list from "../data/categoryList";

function CategoryProducts() {
	const { list } = useParams();
	const category = category_list.find((category) => category.category === list);

	if (!category) {
		return <ErrorPage />;
	}
	const products = category.products;
	return (
		<div>
			<CategoryHero category={category} />
			<p className="total_items">({products.length} Item)</p>
			<div className="products_box">
				{products.map((product) => (
					<ProductCard key={product.name} product={product} />
				))}
			</div>
		</div>
	);
}
export default CategoryProducts;
