import React from 'react';
import useTodoList from './todoList.hook';
import TodoList from '../../components/todo/todoList';

export default function TodoListPage() {

	const { todos } = useTodoList();

  	return (
		<div>
			<h1>TODO List</h1>
			<TodoList list={todos} />
		</div>
  	);
};
