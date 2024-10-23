import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "../screens/home";
import ModeOfPayment from "../screens/modeOfPayments";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Outlet />,
		errorElement: undefined,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "modeOfPayments/",
				element: <ModeOfPayment />,
			},
		],
	},
]);

const Navigation = () => {
	return <RouterProvider router={router} />;
};

export default Navigation;
