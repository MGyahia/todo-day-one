import React, {useContext} from 'react';
import { Sectors } from "../../types/sector";
import { FilterContext } from "../../contexts/filterContext";
import { IFilterContext } from "../../contexts/filterContext.types";

export default function FilterSector() {
	
	const {sectorFilter, setSectorFilter} = useContext(FilterContext) as IFilterContext;
	
	return (
		<select value={sectorFilter+''} onChange={e => {
			setSectorFilter(e.target.value as Sectors)
		}}>
			<option value={undefined}>
				{'All'}
			</option>
			{Object.values(Sectors).map(sector => (
				<option
					key={sector}
					value={sector}
				>{sector}</option>
			))}
		</select>
	)
}