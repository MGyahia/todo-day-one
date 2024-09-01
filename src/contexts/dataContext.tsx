import React, { useState, createContext, useCallback } from "react";
import { todosData } from '../data/todos';
import { ITodo } from "../types/todo";

export interface IDataContext {
	todos: ITodo[],
	setDone: (todo: ITodo) => void
}

interface IDataProvider {
	children?: React.ReactNode
}

export const DataContext = createContext<IDataContext | null>(null);

export default function DataProvider({ children }: IDataProvider) {
	
	const [todos, setTodos] = useState(todosData);

	const setDone = useCallback((todo: ITodo)  => {
		const updatedTodos = todos.map((t: ITodo) =>
			t.id === todo.id
				? {...t, isDone: !todo.isDone}
				: t
		);
		setTodos(updatedTodos);
	}, [todos]);

	return (
		<DataContext.Provider value={{ todos, setDone }} >
			{children}
		</DataContext.Provider>
	)
}
