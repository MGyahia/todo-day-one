import React, { useContext } from 'react';
import { FilterContext } from "../../contexts/filterContext";
import { IFilterContext } from "../../contexts/filterContext.types";

export default function FilterReset() {
	
	const {resetFilters} = useContext(FilterContext) as IFilterContext;
	
	return (
		<button onClick={() => resetFilters()}>
			Reset filters
		</button>
	)
}