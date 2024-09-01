import React, {useContext} from 'react';
import { Sorts } from '../../types/filter';
import { FilterContext } from "../../contexts/filterContext";
import { IFilterContext } from "../../contexts/filterContext.types";

export default function FilterSort() {
	
	const {sortFilter, setSortFilter} = useContext(FilterContext) as IFilterContext;
	
	return (
		<select
			value={sortFilter}
			onChange={e => {
				let stringVal = e.target.value;
				if (!stringVal) return setSortFilter(Sorts.DATE_DESC);
				return setSortFilter(stringVal as Sorts);
			}}
		>
			<option value={Sorts.DATE_DESC}>Order Desc</option>
			<option value={Sorts.DATE_ASC}>Order Asc</option>
		</select>
	)
}