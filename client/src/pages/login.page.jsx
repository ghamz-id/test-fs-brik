import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function LoginPage() {
	const [input, setInput] = useState({
		username: "",
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
				url: BASE_URL + "/auth/login",
				data: input,
			});

			Swal.fire({
				title: data.message,
				icon: "success",
			});

			// Save to localStorage
			localStorage.setItem("token", data.token);
			localStorage.setItem("user", JSON.stringify(data.user));
			navigate("/");
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
								Login
							</label>
							<form onSubmit={Submit} className="mt-10">
								<div>
									<input
										type="text"
										placeholder="Email / Username"
										name="username"
										onChange={GetInput}
										className="px-3 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
									/>
								</div>
								<div className="mt-7">
									<input
										type="password"
										placeholder="Password"
										name="password"
										onChange={GetInput}
										className="px-3 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
									/>
								</div>
								<div className="mt-7 flex">
									<label
										htmlFor="remember_me"
										className="inline-flex items-center w-full cursor-pointer"
									>
										<input
											id="remember_me"
											type="checkbox"
											className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
											name="remember"
										/>
										<span className="ml-2 text-sm text-gray-600">Remember</span>
									</label>
									<div className="w-full text-right">
										<Link
											to={"#"}
											className="underline text-sm text-gray-600 hover:text-gray-900"
										>
											Forgot your password?
										</Link>
									</div>
								</div>
								<div className="mt-7">
									<button
										type="submit"
										className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
									>
										Login
									</button>
								</div>
								<div className="mt-7">
									<div className="flex justify-center items-center">
										<label className="mr-2">Don't have account yet ? </label>
										<Link
											to={"/register"}
											className="text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
										>
											Register
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
