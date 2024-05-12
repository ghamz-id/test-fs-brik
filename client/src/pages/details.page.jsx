import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchById } from "../redux/products.slice";
import Swal from "sweetalert2";

export default function DetailsPage() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { data } = useSelector((state) => state.products.productDetails);

	useEffect(() => {
		dispatch(fetchById(id));
	}, [id]);

	return (
		<>
			<div className="w-full h-screen flex justify-center items-center bg-base-200 max-sm:overflow-y-auto">
				<div className="container h-full flex justify-center items-center mt-10">
					<div className="hero min-h-screen">
						{data && (
							<div className="hero-content flex-col lg:flex-row max-sm:mt-20">
								<img
									src={data.image}
									alt="image"
									className="max-w-xl rounded-lg shadow-2xl max-sm:max-w-xs"
								/>
								<div>
									<h1 className="text-2xl font-bold">{data.name}</h1>
									<p className="font-extralight text-sm">
										{data.Category.categoryName}
									</p>
									<p className="text-2xl">
										{new Intl.NumberFormat("id-ID", {
											style: "currency",
											currency: "IDR",
										}).format(data.price)}
									</p>

									<div className="divider">Details Product</div>
									<div>
										<p>Weight : {data.weight} grams</p>
										<p>Width : {data.width} cm</p>
										<p>Length : {data.length} cm</p>
										<p>Height : {data.height} cm</p>
									</div>
									<div className="py-6">
										<h1 className="font-semibold">Desc</h1>
										<p>{data.description}</p>
									</div>
									<button
										onClick={() => {
											if (localStorage.getItem("token")) {
												Swal.fire({
													title: "Success add to cart",
													icon: "success",
												});
											} else {
												Swal.fire({
													title: "Please login first",
													icon: "error",
												});
											}
										}}
										className="btn btn-success text-white max-sm:btn-sm"
									>
										Add to Cart
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
