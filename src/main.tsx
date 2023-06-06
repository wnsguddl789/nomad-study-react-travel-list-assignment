import React from "react";
import ReactDOM from "react-dom/client";

import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@theme";

import router from "./routes";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<RecoilRoot>
			<ThemeProvider theme={{}}>
				<RouterProvider router={router} />
			</ThemeProvider>
		</RecoilRoot>
	</React.StrictMode>
);
