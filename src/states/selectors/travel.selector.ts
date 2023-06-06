import { selector } from "recoil";

import { Travel } from "../types/travel.type";
import { travelListState } from "../atoms/travel.atom";

import { ATOM_KEYS } from "@/constants/keys";

const notSelectedTravelListSelector = selector<Travel[]>({
	key: ATOM_KEYS.NOT_SELECTED_TRAVEL_LIST,
	get: ({ get }) => {
		return get(travelListState).filter(({ type }) => type === "NOT_SELECTED");
	},
});

const doneTravelListSelector = selector<Travel[]>({
	key: ATOM_KEYS.DONE_TRAVEL_LIST,
	get: ({ get }) => {
		return get(travelListState).filter(({ type }) => type === "DONE");
	},
});

const lovedTravelListSelector = selector<Travel[]>({
	key: ATOM_KEYS.LOVED_TRAVEL_LIST,
	get: ({ get }) => {
		return get(travelListState).filter(({ type }) => type === "LOVED");
	},
});

export { notSelectedTravelListSelector, doneTravelListSelector, lovedTravelListSelector };
