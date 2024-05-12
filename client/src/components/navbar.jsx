import { Link } from "react-router-dom";
import { fetch } from "../redux/products.slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Navbar() {
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem("user"));
	return (
		<>
			<div className="navbar bg-neutral text-neutral-content fixed z-10 lg:px-5">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle hover:bg-black"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black gap-2"
						>
							<li>
								<Link to={"/"}>Homepage</Link>
							</li>
							<li>
								<Link to={"/add-product"}>
									Add product
									{!localStorage.token && (
										<span className="badge badge-neutral text-xs">login</span>
									)}
								</Link>
							</li>
							{localStorage.token && (
								<li>
									<p className="mt-10">
										Hello, {user.username}
										<span className="badge badge-neutral text-xs">
											{user.role}
										</span>
									</p>
								</li>
							)}
						</ul>
					</div>
				</div>
				<div className="navbar-center">
					<Link to={"/"} className="btn btn-ghost text-xl hover:bg-black">
						Kelontong-Apps
					</Link>
				</div>
				<div className="navbar-end">
					{localStorage.token ? (
						<Link
							to={"/"}
							onClick={() => {
								localStorage.clear();
								useEffect(() => {
									dispatch(fetch());
								}, []);
							}}
							className="btn btn-ghost btn-circle hover:bg-black"
						>
							Logout
						</Link>
					) : (
						<Link
							to={"/login"}
							className="btn btn-ghost btn-circle hover:bg-black"
						>
							Login
						</Link>
					)}
				</div>
			</div>
		</>
	);
}
