const TravelTypes = ["NOT_SELECTED", "DONE", "LOVED"] as const;
type TravelType = (typeof TravelTypes)[number];

type Travel = {
	id: string;
	country: string;
	type: TravelType;
};

export type { Travel, TravelType };
