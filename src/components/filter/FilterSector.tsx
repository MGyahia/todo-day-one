import React, {useContext} from 'react';
import Select from 'react-select';
import { Sectors } from "../../types/sector";
import { FilterContext } from "../../contexts/filterContext";
import { IFilterContext } from "../../contexts/filterContext.types";

export default function FilterSector() {
	
	const {sectorFilter, setSectorFilter} = useContext(FilterContext) as IFilterContext;
	
	const options = Object.values(Sectors).map(sector => 
		({ value: sector, label: sector })
	);

	return (
		<Select 
			options={options}
			value = {
				options.filter(option =>  sectorFilter.includes(option.label))
			}
		 	isMulti
			placeholder='Filter Sectors'
			onChange={data => {
				const values = data.map(d => d.value) || [];
				if (values.includes(Sectors.Business)) {
					values.pop();
					values.push(Sectors.Marketing, Sectors.Communication);
				}
				setSectorFilter(values as Sectors[])
			}} 
		/>
	)
}