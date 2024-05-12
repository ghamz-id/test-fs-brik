import { Link } from "react-router-dom";

export default function Card({ product }) {
	return (
		<>
			<Link to={`/products/${product.id}`}>
				<div className="border card rounded-bl-none rounded-br-none w-72 bg-base-100 shadow-xl max-sm:w-full hover:cursor-pointer hover:shadow-indigo-500/50">
					<figure>
						<img
							src={product.image}
							alt="img"
							className="hover:scale-125 hover:-rotate-6 transition ease-in-out duration-300 border-b w-full h-48 object-cover max-sm:h-24"
						/>
						<div className="badge badge-primary bg-opacity-75 text-slate-300 absolute right-2 top-1 max-sm:badge-xs">
							{product.Category.categoryName}
						</div>
					</figure>
					<div
						className="card-body p-4
				max-sm:text-xs max-sm:p-2
				max-lg:p-2
				max-xl:p-2
				"
					>
						<h2 className="card-title text-lg max-sm:text-xs">
							{product.name}
						</h2>
						<p className="truncate">{product.description}</p>
						<p className="font-bold">
							{new Intl.NumberFormat("id-ID", {
								style: "currency",
								currency: "IDR",
							}).format(product.price)}
						</p>
					</div>
				</div>
			</Link>
		</>
	);
}
