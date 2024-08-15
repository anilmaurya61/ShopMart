/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function CategoryHero({ category }) {
	return (
		<div className="big_hero">
			<Link to={`/list/${category.category}`}>
				<img src={category.img} alt={category.name} />
			</Link>
			<h2>{category.name}</h2>
		</div>
	);
}

export default CategoryHero;
