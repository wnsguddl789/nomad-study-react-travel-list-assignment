import { createBrowserRouter } from "react-router-dom";

import LayoutProvider from "@/App";

import HomePage from "@pages/HomePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutProvider />,
		children: [{ path: "/", element: <HomePage /> }],
	},
]);

export default router;
