import Card from "../components/card";

export default function HomePage() {
	return (
		<>
			<div className="w-full flex flex-col items-center pb-4">
				<div className="container flex gap-6 mt-20 p-2 max-sm:px-2">
					{/* SIDE MENU */}
					<div className="flex flex-col gap-3 w-80 max-sm:hidden">
						<div className="divider">Find Our Products</div>
						{/* SEARCH */}
						<label className="form-control w-full gap-2 px-4">
							<label className="input input-bordered flex items-center gap-2 w-full input-sm">
								<input type="text" className="grow" placeholder="Search" />
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-3 w-3"
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
						<div className="divider">Sort By</div>
						<div className="form-control px-4">
							{Array.from({ length: 5 }, (_, index) => (
								<label className="label cursor-pointer" key={index}>
									<span className="label-text">Red pill</span>
									<input
										type="radio"
										name="radio-10"
										className="radio checked:bg-blue-500"
									/>
								</label>
							))}
						</div>
					</div>
					{/* CONTENT PRODUCTS */}
					<div className="w-full">
						<div className="text-end pb-2">
							<p>ITEMS PER PAGE : 10</p>
						</div>
						<div
							className="
					grid grid-cols-4 gap-4
					max-sm:grid-cols-2 max-sm:gap-4
					max-lg:grid-cols-2 max-lg:gap-4
					max-xl:grid-cols-3 max-xl:gap-4
					"
						>
							{Array.from({ length: 10 }, (_, index) => (
								<Card key={index} id={index} />
							))}
						</div>
					</div>
				</div>
				<div className="grid justify-center pt-4">
					<div className="join gap-1">
						<button className="join-item btn max-sm:btn-sm">«</button>
						<button className="join-item btn max-sm:btn-sm">Page 22</button>
						<button className="join-item btn max-sm:btn-sm">»</button>
					</div>
				</div>
			</div>
		</>
	);
}
