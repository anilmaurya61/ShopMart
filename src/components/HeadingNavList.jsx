import { Link, useParams } from "react-router-dom";
import category_list from "../data/categoryList";

function HeadingNavList() {
	const { list } = useParams();

	return (
		<div>
			<ul className="category_list">
				{category_list.map((category, i) => (
					<li key={i + (i + 1) * 8}>
						<Link
							className={category.category === list ? "active_nav" : ""}
							to={`/list/${category.category}`}
						>
							{category.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default HeadingNavList;
