import React from "react";
import { ThemeProvider as BaseThemeProvider } from "@emotion/react";

type Theme = {};

type Props = {
	theme: Theme;
	children: React.ReactNode;
};

export const ThemeProvider = ({ children, theme }: Props) => {
	return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>;
};
