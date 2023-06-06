import styled from "@emotion/styled";

import { Travel } from "@/states/types/travel.type";

type Props = {
	title?: string;
	travelList: Travel[];
	buttons?: (id: string) => JSX.Element;
};

const TravelListContainer = ({ title, travelList, buttons }: Props) => (
	<Container>
		{title && <Title>{title}</Title>}
		<List>
			{travelList.map((travel) => (
				<ListItem key={travel.id}>
					<Paragraph>{travel.country}</Paragraph>
					{buttons && buttons(travel.id)}
				</ListItem>
			))}
		</List>
	</Container>
);

export default TravelListContainer;

const Container = styled.div``;

const List = styled.ul``;

const ListItem = styled.li`
	display: flex;

	gap: 6px;
	justify-content: space-between;
`;

const Title = styled.p`
	font-size: 1.5em;
	font-weight: 600;
`;

const Paragraph = styled.p<{ type?: "error" }>`
	color: ${({ type }) => (type === "error" ? "red" : "black")};
`;
