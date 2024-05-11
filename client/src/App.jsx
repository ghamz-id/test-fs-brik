import {
	createBrowserRouter,
	redirect,
	RouterProvider,
} from "react-router-dom";
import MainLayout from "./components/mainLayout";
import HomePage from "./pages/home.page";

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [{ path: "/", element: <HomePage /> }],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
