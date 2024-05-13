import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card";
import { useEffect, useState } from "react";
import { fetch } from "../../redux/products.slice";
import { Link, useNavigate } from "react-router-dom";

export default function TableProducts() {
	const [params, setParams] = useState({});
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.products);
	const { data } = products;

	useEffect(() => {
		dispatch(fetch(params));
	}, [params]);

	const GetParams = (e) => {
		const { name, value } = e.target;
		setParams({ ...params, [name]: value, page: 1 });
	};

	return (
		<>
			<div className="w-full flex flex-col items-center pb-4 bg-base-200">
				<div className="container flex gap-6 mt-20 p-2 max-sm:px-2">
					{/* SIDE MENU */}
					<div className="flex flex-col gap-3 w-80 pt-5 max-sm:hidden">
						<div className="divider font-semibold">Find Our Products</div>
						{/* SEARCH */}
						<label className="form-control w-full gap-2 px-4">
							<label className="input input-bordered flex items-center gap-2 w-full input-sm">
								<input
									type="text"
									className="grow"
									placeholder="Search"
									name="search"
									onChange={GetParams}
								/>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-3 w-3 hover:cursor-pointer"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</label>
						</label>
						{/* SORT BY */}
						<div className="divider font-semibold">Sort By</div>
						<div className="form-control px-4">
							{["name", "price", "CategoryId"].map((item, i) => (
								<label className="cursor-pointer flex gap-2 py-1" key={i}>
									<input
										type="radio"
										name="sortBy"
										onChange={() =>
											GetParams({ target: { name: "sortBy", value: item } })
										}
										className="checkbox checkbox-success"
									/>
									<span className="label-text text-left">
										{item === "name"
											? "Product Name"
											: item === "price"
											? "Product Price"
											: "Product Category"}
									</span>
								</label>
							))}
						</div>
					</div>
					{/* CONTENT PRODUCTS */}
					<div className="w-full">
						<div className="text-end pb-2">
							<p className="px-4 font-semibold">
								ITEMS ON PAGE : {products.dataOnPage}
							</p>
						</div>
						<div className="border rounded-xl p-2">
							<table className="table">
								{/* head */}
								<thead>
									<tr className="font-bold text-sm">
										<th>No</th>
										<th>Product Name</th>
										<th>Description</th>
										<th>Price</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{data &&
										data.map((product, i) => (
											<tr
												className="hover bg-white hover:cursor-pointer"
												key={i}
											>
												<td>{product.id}</td>
												<td>
													<div className="flex items-center gap-3">
														<div className="avatar">
															<div className="mask mask-squircle w-12 h-12">
																<img
																	src={product.image}
																	alt="Avatar Tailwind CSS Component"
																/>
															</div>
														</div>
														<div>
															<div className="font-bold">{product.name}</div>
															<div className="text-sm opacity-50">
																{product.Category.categoryName}
															</div>
														</div>
													</div>
												</td>
												<td>{product.description}</td>
												<td>
													{new Intl.NumberFormat("id-ID", {
														style: "currency",
														currency: "IDR",
													}).format(product.price)}
												</td>
												<td className="grid grid-cols-2 gap-2 mt-3">
													<button className="btn btn-warning btn-xs">
														Edit
													</button>
													<button className="btn btn-error btn-xs text-white">
														Delete
													</button>
													<Link
														to={`/products/${product.id}`}
														className="btn btn-info btn-xs col-span-2"
													>
														Details
													</Link>
												</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className="grid justify-center pt-4">
					{products.dataOnPage !== 0 && (
						<div className="join gap-1">
							<button
								onClick={() => setParams({ page: products.page - 1 })}
								className={
									products.page === 1
										? "join-item btn max-sm:btn-sm btn-disabled"
										: "join-item btn max-sm:btn-sm bg-neutral text-white"
								}
							>
								«
							</button>
							<button className="join-item btn max-sm:btn-sm bg-neutral text-white">
								Page {products.page}
							</button>
							<button
								onClick={() => setParams({ page: products.page + 1 })}
								className={
									products.page === products.totalPage ||
									products.dataOnPage < 10
										? "join-item btn max-sm:btn-sm btn-disabled"
										: "join-item btn max-sm:btn-sm bg-neutral text-white"
								}
							>
								»
							</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
