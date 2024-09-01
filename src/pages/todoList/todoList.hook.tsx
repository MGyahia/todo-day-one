import { useContext, useState, useEffect } from "react";

import { Sorts } from "../../types/filter";
import { Sectors, Sector } from "../../types/sector";

import { DataContext, IDataContext } from "../../contexts/dataContext";
import { FilterContext } from "../../contexts/filterContext";
import { IFilterContext } from "../../contexts/filterContext.types";

export default function useTodoList() {
	const { todos } = useContext(DataContext) as IDataContext;

	const {
		sectorFilter,
		doneFilter,
		sortFilter
	} = useContext(FilterContext) as IFilterContext;

	const [filtredTodos, setFiltredTodos] = useState(todos);


	useEffect(() => {
		const filtred_todos = todos
			.filter((todo) => {
				if (sectorFilter) {
					const BusinessSector: Sector[] = [Sectors.Communication, Sectors.Marketing];
					if (sectorFilter === Sectors.Business) {
						return BusinessSector.includes(todo.type);
					}
					if (todo.type !== sectorFilter) return false;
				}
				return true;
			})
			.filter((todo) => {
				if (doneFilter !== null && todo.isDone !== !!doneFilter) return false;
				return true;
			})
			.sort((a, b) => {
				const dateA = new Date(a.createdAt as Date).getTime();
				const dateB = new Date(b.createdAt as Date).getTime();
				return sortFilter === Sorts.DATE_ASC ? dateA - dateB : dateB - dateA;
			});
		setFiltredTodos(filtred_todos);
	}, [sectorFilter, doneFilter, sortFilter, todos]);




	return {
		todos: filtredTodos
	}
}
