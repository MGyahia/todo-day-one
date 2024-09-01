import { useContext, useState, useEffect } from "react";

import { FilterContext } from "../../contexts/filterContext";
import { IFilterContext } from "../../contexts/filterContext.types";

import { useQuery } from '@apollo/client';
import { GET_TODO_LIST } from './todoList.query';
import { ITodo } from "src/types/todo";


export default function useTodoList() {
	const [todos, setTodos] = useState<ITodo[]>([]);
	
	const {
		sectorFilter,
		doneFilter,
		sortFilter
	} = useContext(FilterContext) as IFilterContext;
	
	const { loading, error, data } = useQuery(GET_TODO_LIST, {
		variables: {
			filters: {
				...sectorFilter && sectorFilter.length > 0 ? {types: sectorFilter} : {},
				...doneFilter ? {isDone: doneFilter} : {}
			},
			orderBy: sortFilter
		},
	});

	useEffect(() => {
		if (data?.getTodoList) setTodos(data?.getTodoList);
	}, [data])

	return {
		todos,
		loading,
		error
	}
}
