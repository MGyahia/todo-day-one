import React, { useState, createContext } from "react";
import { Sectors } from "../types/sector";
import { Sorts, FilterDoneType } from "../types/filter";
import { IFilterContext } from "./filterContext.types";

export interface IFilterProvider {
	children: React.ReactNode | null
}

export const FilterContext = createContext<IFilterContext | null>(null);

export default function FilterProvider({ children }: IFilterProvider) {
  
	const [sectorFilter, setSectorFilter] = useState<Sectors[]>([]);
	const [doneFilter, setDoneFilter] = useState<FilterDoneType | null>(null);
	const [sortFilter, setSortFilter] = useState<Sorts>(Sorts.DATE_DESC);

	const resetFilters = () => {
		setSectorFilter([]);
		setDoneFilter(null);
		setSortFilter(Sorts.DATE_DESC);
	}

	return (
		<FilterContext.Provider value={{
			sectorFilter, setSectorFilter,
			doneFilter, setDoneFilter,
			sortFilter, setSortFilter,
			resetFilters
		}}>
			{children}
		</FilterContext.Provider>
	);
}