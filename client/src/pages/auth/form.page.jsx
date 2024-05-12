export default function FormPage() {
	return (
		<>
			<div className="w-full h-screen flex justify-center items-center bg-base-200">
				<div className="container flex items-center justify-center p-12">
					<div className="mx-auto w-full max-w-[550px]">
						<form action="https://formbold.com/s/FORM_ID" method="POST">
							<div className="mb-5">
								<label
									htmlFor="name"
									className="mb-3 block text-base font-medium text-[#07074D]"
								>
									Product Name
								</label>
								<input
									type="text"
									name="name"
									id="name"
									placeholder="Product Name"
									className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
								/>
							</div>
							<div className="flex justify-between gap-2">
								<div className="w-full">
									<label
										htmlFor="CategoryId"
										className="mb-3 block text-base font-medium text-[#07074D]"
									>
										Category
									</label>
									<select
										type="text"
										name="CategoryId"
										id="CategoryId"
										className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
									>
										<option>-Select-</option>
										{["Food", "Drink", "Snack"].map((category, i) => (
											<option value={i + 1} key={i}>
												{category}
											</option>
										))}
									</select>
								</div>
								<div className="w-full">
									<label
										htmlFor="price"
										className="mb-3 block text-base font-medium text-[#07074D]"
									>
										Price
									</label>
									<div className="relative mb-6">
										<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none font-semibold text-slate-400">
											Rp.
										</div>
										<input
											type="number"
											id="input-group-1"
											className="ps-10 w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
											placeholder="0"
										/>
									</div>
								</div>
							</div>
							<div className="mb-5">
								<label
									htmlFor="image"
									className="mb-3 block text-base font-medium text-[#07074D]"
								>
									Image
								</label>
								<input
									type="file"
									name="image"
									id="image"
									placeholder="Enter your image"
									className="file-input w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
								/>
							</div>
							<div className="flex gap-2">
								<div className="mb-5">
									<label
										htmlFor="weight"
										className="mb-3 block text-base font-medium text-[#07074D]"
									>
										Weight
									</label>
									<input
										type="number"
										name="weight"
										id="weight"
										placeholder="0"
										className="file-input w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
									/>
								</div>
								<div className="mb-5">
									<label
										htmlFor="width"
										className="mb-3 block text-base font-medium text-[#07074D]"
									>
										width
									</label>
									<input
										type="number"
										name="width"
										id="width"
										placeholder="0"
										className="file-input w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
									/>
								</div>
								<div className="mb-5">
									<label
										htmlFor="length"
										className="mb-3 block text-base font-medium text-[#07074D]"
									>
										length
									</label>
									<input
										type="number"
										name="length"
										id="length"
										placeholder="0"
										className="file-input w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
									/>
								</div>
								<div className="mb-5">
									<label
										htmlFor="height"
										className="mb-3 block text-base font-medium text-[#07074D]"
									>
										height
									</label>
									<input
										type="number"
										name="height"
										id="height"
										placeholder="0"
										className="file-input w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
									/>
								</div>
							</div>
							<div className="mb-5">
								<label
									htmlFor="description"
									className="mb-3 block text-base font-medium text-[#07074D]"
								>
									Description
								</label>
								<textarea
									rows={4}
									name="description"
									id="description"
									placeholder="Type your description here..."
									className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
									defaultValue={""}
								/>
							</div>
							<div>
								<button
									type="submit"
									className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
