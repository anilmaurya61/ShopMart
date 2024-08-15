import { Link } from "react-router-dom";
import Button from "./Button";
import CategoryHero from "./CategoryHero";
import category_list from "../data/categoryList";

function CategoryHeroSection() {
	const fullWidthCategoryList = category_list.slice(0, 2);
	const halfWidthCategoryList = category_list.slice(2);

	return (
		<div className="big_hero_section">
			{fullWidthCategoryList.map((category, i) => (
				<div className="align_center" key={i + (i + 1) * 6}>
					<CategoryHero category={category} />
					<Link to={`/list/${category.category}`}>
						<Button text="SHOP NOW" />
					</Link>
				</div>
			))}
			<div className="flex_hero">
				{halfWidthCategoryList.map((category, i) => (
					<div className="align_center" key={i + (i + 1) * 3}>
						<CategoryHero category={category} />
						<Link to={`/list/${category.category}`}>
							<Button text="SHOP NOW" />
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default CategoryHeroSection;
