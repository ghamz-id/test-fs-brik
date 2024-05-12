import axios from "axios";
import { BASE_URL } from "../../constants";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function RegisterPage() {
	const [input, setInput] = useState({
		name: "",
		username: "",
		email: "",
		password: "",
	});

	const GetInput = (e) => {
		const { name, value } = e.target;
		const newInput = {
			...input,
			[name]: value,
		};
		setInput(newInput);
	};

	const navigate = useNavigate();
	const Submit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios({
				method: "POST",
				url: BASE_URL + "/auth/register",
				data: input,
			});

			Swal.fire({
				title: data.message,
				icon: "success",
			});
			navigate("/login");
		} catch (error) {
			Swal.fire({
				title: error.response.data.message,
				icon: "warning",
			});
		}
	};

	return (
		<>
			<div className="font-sans">
				<div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
					<div className="relative sm:max-w-sm w-full">
						<div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
						<div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
						<div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
							<label
								htmlFor=""
								className="block mt-3 text-sm text-gray-700 text-center font-semibold"
							>
								Register
							</label>
							<form onSubmit={Submit} className="mt-10 grid gap-4">
								<div>
									<input
										type="text"
										placeholder="Name"
										name="name"
										onChange={GetInput}
										className="px-3 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
									/>
								</div>
								<div>
									<input
										type="text"
										placeholder="Username"
										name="username"
										onChange={GetInput}
										className="px-3 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
									/>
								</div>
								<div>
									<input
										type="email"
										placeholder="Email"
										name="email"
										onChange={GetInput}
										className="px-3 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
									/>
								</div>
								<div>
									<input
										type="password"
										placeholder="Password"
										name="password"
										onChange={GetInput}
										className="px-3 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
									/>
								</div>
								<div className="mt-7">
									<button
										type="submit"
										className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
									>
										Register
									</button>
								</div>
								<div className="mt-7">
									<div className="flex justify-center items-center">
										<label className="mr-2">Have an account ? </label>
										<Link
											to={"/login"}
											className="text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
										>
											Login
										</Link>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
