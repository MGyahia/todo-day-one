import React, {useContext} from 'react';
import { FilterContext } from "../../contexts/filterContext";
import { IFilterContext } from "../../contexts/filterContext.types";

export default function FilterDone() {
	
	const {doneFilter, setDoneFilter} = useContext(FilterContext) as IFilterContext;
	
	return (
		<select value={doneFilter+''} onChange={e => {
			let stringVal = e.target.value;
			if (!stringVal) return setDoneFilter(null);
			return setDoneFilter(stringVal === 'true');
		}}>
			<option value={''}>{'All'}</option>
			<option value={'true'}>{'Done'}</option>
			<option value={'false'}>{'Not Done'}</option>
		</select>
	)
}