import React, { useEffect } from 'react';
import useTodoList from './todoList.hook';
import TodoList from '../../components/todo/todoList';

import FilterSector from "../../components/filter/FilterSector";
import FilterDone from "../../components/filter/FilterDone";
import FilterSort from "../../components/filter/FilterSort";
import FilterReset from '../../components/filter/FilterReset';

export default function TodoListPage() {

	const { todos, error, loading } = useTodoList();

	if (loading) return <p>Loading...</p>;
  	if (error) return <p>Error: {error.message}</p>;
	
  	return (
		<div>
			<h1>TODO List</h1>

			<div>
				<FilterSector />
				<FilterDone />
				<FilterSort />
				<FilterReset />
			</div>

			<TodoList list={todos} />
		</div>
  	);
};
