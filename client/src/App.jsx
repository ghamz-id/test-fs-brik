import {
	createBrowserRouter,
	redirect,
	RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";
import MainLayout from "./components/mainLayout";
import HomePage from "./pages/home.page";
import DetailsPage from "./pages/details.page";
import LoginPage from "./pages/login.page";
import RegisterPage from "./pages/register.page";
import FormPage from "./pages/auth/form.page";
import Swal from "sweetalert2";
import TableProducts from "./pages/auth/table.products.page";

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{ path: "/", element: <HomePage /> },
			{
				path: "/form-product",
				element: <FormPage />,
				loader: () => {
					if (localStorage.token) {
						return null;
					}
					Swal.fire({
						title: "You must login for access this fitur",
						icon: "error",
					});
					return redirect("/login");
				},
				children: [{ path: ":id", element: <FormPage /> }],
			},
			{
				path: "/table-products",
				element: <TableProducts />,
				loader: () => {
					if (localStorage.token) {
						return null;
					}
					Swal.fire({
						title: "You must login for access this fitur",
						icon: "error",
					});
					return redirect("/login");
				},
				children: [{ path: ":id", element: <TableProducts /> }],
			},
			{
				path: "/products/:id",
				element: <DetailsPage />,
			},
			{
				path: "*",
				element: <div>Not Found</div>,
			},
		],
	},
	{
		path: "/login",
		element: <LoginPage />,
		loader: () => {
			if (localStorage.token) {
				return redirect("/");
			}
			return null;
		},
	},
	{
		path: "/register",
		element: <RegisterPage />,
		loader: () => {
			if (localStorage.token) {
				return redirect("/");
			}
			return null;
		},
	},
]);

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
