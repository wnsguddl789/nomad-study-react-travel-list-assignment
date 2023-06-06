import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

import { ATOM_KEYS } from "../../constants/keys";
import type { Travel } from "../types/travel.type";

const travelListState = atom<Travel[]>({
	key: ATOM_KEYS.ALL_TRAVEL_LIST,
	default: [],
	effects_UNSTABLE: [persistAtom],
});

export { travelListState };
