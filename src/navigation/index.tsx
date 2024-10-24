import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "../screens/home";
import ModeOfPayment from "../screens/modeOfPayments";
import HowToOrder from "../screens/howToOrder";
import CheckoutLinks from "../screens/checkoutLinks";

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
			{
				path: "howToOrder/",
				element: <HowToOrder />,
			},
			{
				path: "checkoutLinks/",
				element: <CheckoutLinks />,
			},
		],
	},
]);

const Navigation = () => {
	return <RouterProvider router={router} />;
};

export default Navigation;
