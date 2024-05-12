import { Link } from "react-router-dom";

export default function Card({ id }) {
	return (
		<>
			<Link to={`/products/${id}`}>
				<div className="card rounded-bl-none rounded-br-none w-72 bg-base-100 shadow-xl max-sm:w-full hover:cursor-pointer">
					<figure>
						<img
							src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
							alt="img"
						/>
					</figure>
					<div
						className="card-body
				max-sm:text-xs max-sm:p-2
				max-lg:p-2
				max-xl:p-2
				"
					>
						<h2 className="card-title max-sm:text-lg">Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
					</div>
				</div>
			</Link>
		</>
	);
}
