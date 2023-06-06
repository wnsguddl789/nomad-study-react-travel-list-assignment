import { useRecoilState, useRecoilValue } from "recoil";

import styled from "@emotion/styled";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { v4 as uuidv4 } from "uuid";

import { travelListState } from "@/states/atoms/travel.atom";
import {
	notSelectedTravelListSelector,
	doneTravelListSelector,
	lovedTravelListSelector,
} from "@/states/selectors/travel.selector";

import TravelListContainer from "@/components/TravelListContainer";

type TravelFormValues = {
	country: string;
};

const resolver = yupResolver(
	yup.object({
		country: yup.string().required("required"),
	})
);

export default function HomePage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TravelFormValues>({ resolver });

	const [travelList, setTravelList] = useRecoilState(travelListState);

	const notSelectedTravelList = useRecoilValue(notSelectedTravelListSelector);
	const doneTravelList = useRecoilValue(doneTravelListSelector);
	const lovedTravelList = useRecoilValue(lovedTravelListSelector);

	const onSubmit = ({ country }: TravelFormValues) => {
		setTravelList((prev) => [...prev, { id: uuidv4(), type: "NOT_SELECTED", country }]);
	};

	const getTravelList = (id: string) => ({
		filteredList: travelList.filter((item) => item.id !== id),
		targetItem: travelList.find((item) => item.id === id),
	});

	const actions = {
		NOT_SELECTED: {
			move: (id: string) => {
				const { filteredList, targetItem } = getTravelList(id);
				setTravelList([...filteredList, { ...targetItem, type: "DONE" }]);
			},
			remove: (id: string) => {
				const { filteredList } = getTravelList(id);
				setTravelList(filteredList);
			},
		},
		DONE: {
			move: (id: string) => {
				const { filteredList, targetItem } = getTravelList(id);
				setTravelList([...filteredList, { ...targetItem, type: "NOT_SELECTED" }]);
			},
			remove: (id: string) => {
				const { filteredList, targetItem } = getTravelList(id);
				setTravelList([...filteredList, { ...targetItem, type: "LOVED" }]);
			},
		},
		LOVED: {
			remove: (id: string) => {
				const { filteredList } = getTravelList(id);
				setTravelList(filteredList);
			},
		},
	};
	return (
		<Wrapper>
			<Container>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Title>내가 가고싶은 나라들</Title>

					<FormItem align="vertical">
						<input
							placeholder="이름"
							type="text"
							{...register("country", { required: true })}
						/>
						{errors?.country?.message && (
							<Paragraph type="error">{errors?.country?.message}</Paragraph>
						)}
					</FormItem>

					<FormItem align="vertical">
						<button>가자!</button>
					</FormItem>
				</Form>
			</Container>

			<TravelListContainer
				travelList={notSelectedTravelList}
				buttons={(id) => (
					<div>
						<button onClick={() => actions.NOT_SELECTED.move(id)}>추가</button>
						<button onClick={() => actions.NOT_SELECTED.remove(id)}>삭제</button>
					</div>
				)}
			/>

			<TravelListContainer
				title="내가 가본 나라들"
				travelList={doneTravelList}
				buttons={(id) => (
					<div>
						<button onClick={() => actions.DONE.move(id)}>
							가보지 못한 나라들로 이동
						</button>
						<button onClick={() => actions.DONE.remove(id)}>
							좋아하는 나라들로 이동
						</button>
					</div>
				)}
			/>

			<TravelListContainer
				title="내가 좋아하는 나라들"
				travelList={lovedTravelList}
				buttons={(id) => (
					<div>
						<button onClick={() => actions.LOVED.remove(id)}>삭제</button>
					</div>
				)}
			/>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Container = styled.div``;

const Form = styled.form``;

const FormItem = styled.div<{ align: "vertical" | "horizontal" }>`
	display: flex;
	flex-direction: ${({ align }) => (align === "vertical" ? "column" : "row")};
	flex: 1;

	& > * {
		flex: 1;
	}
`;

const Title = styled.p`
	font-size: 1.5em;
	font-weight: 600;
`;

const Paragraph = styled.p<{ type?: "error" }>`
	color: ${({ type }) => (type === "error" ? "red" : "black")};
`;
