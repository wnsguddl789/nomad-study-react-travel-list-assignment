import React from "react";
import ReactDOM from "react-dom/client";
import "reflect-metadata";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@theme";

import App from "./App";

import "./styles/reset.css";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<RecoilRoot>
			<ThemeProvider theme={{}}>
				<App />
			</ThemeProvider>
		</RecoilRoot>
	</React.StrictMode>
);
