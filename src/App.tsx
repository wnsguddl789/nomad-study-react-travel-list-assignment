import { Outlet } from "react-router-dom";

import LayoutProvider from "./components/LayoutProvider";

export default function App() {
	return (
		<LayoutProvider>
			<Outlet />
		</LayoutProvider>
	);
}
