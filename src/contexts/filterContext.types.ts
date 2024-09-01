import { Sectors } from "../types/sector";
import { FilterDoneType } from "../types/filter";
import { Sorts } from "../types/filter";

export interface IFilterContext {
	sectorFilter: Sectors[],
	setSectorFilter: (sector: Sectors[]) => void,
	doneFilter: FilterDoneType | null,
	setDoneFilter: (done: FilterDoneType | null) => void,
	sortFilter: Sorts,
	setSortFilter: (sort: Sorts) => void,
	resetFilters: () => void
}