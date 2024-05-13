import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { BASE_URL } from "../../../constants";
import Loading from "../../components/loading";
import { useNavigate } from "react-router-dom";

export default function FormPage() {
	const [input, setInput] = useState({
		name: "",
		description: "",
		weight: 0,
		width: 0,
		length: 0,
		height: 0,
		price: 0,
		sku: "",
		CategoryId: 0,
	});

	const [file, setFile] = useState(null);
	const getImage = (e) => {
		const image = e.target.files[0];
		setFile(image);
	};

	const GetInput = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const navigate = useNavigate();
	const SubmitForm = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("name", input.name);
		formData.append("description", input.description);
		formData.append("weight", input.weight);
		formData.append("width", input.width);
		formData.append("length", input.length);
		formData.append("height", input.height);
		formData.append("image", file);
		formData.append("price", input.price);
		formData.append("sku", input.sku);
		formData.append("CategoryId", input.CategoryId);
		try {
			setLoading(true);
			const response = await axios({
				method: "POST",
				url: BASE_URL + "/products",
				headers: {
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
				data: formData,
			});
			setLoading(false);
			Swal.fire({
				icon: "success",
				title: response.data.message,
			});
			navigate("/");
		} catch (error) {
			setLoading(false);
			Swal.fire({
				icon: "error",
				title: error.response.data.message,
			});
		}
	};

	const [loading, setLoading] = useState(false);
	if (loading) {
		return <Loading />;
	}
	return (
		<>
			<div className="w-full h-screen flex justify-center items-center bg-base-200">
				<div className="container flex items-center justify-center p-12">
					<div className="mx-auto w-full max-w-[550px]">
						<form onSubmit={SubmitForm}>
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
									onChange={GetInput}
									value={input.name}
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
										onChange={GetInput}
										value={input.CategoryId}
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
											name="price"
											onChange={GetInput}
											value={input.price}
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
									onChange={getImage}
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
										onChange={GetInput}
										value={input.weight}
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
										onChange={GetInput}
										value={input.width}
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
										onChange={GetInput}
										value={input.length}
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
										onChange={GetInput}
										value={input.height}
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
									onChange={GetInput}
									value={input.description}
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
