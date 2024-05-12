import {
	createBrowserRouter,
	redirect,
	RouterProvider,
} from "react-router-dom";
import MainLayout from "./components/mainLayout";
import HomePage from "./pages/home.page";
import DetailsPage from "./pages/details.page";
import LoginPage from "./pages/login.page";
import RegisterPage from "./pages/register.page";

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{ path: "/", element: <HomePage /> },
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
	return <RouterProvider router={router} />;
}

export default App;
