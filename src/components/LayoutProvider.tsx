import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function LayoutProvider({ children }: Props) {
	return <main>{children}</main>;
}
