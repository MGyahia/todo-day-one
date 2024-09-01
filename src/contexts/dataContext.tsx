import React, { useState, createContext } from "react";
import { todosData } from '../data/todos';
import { ITodo } from "../types/todo";

export interface IDataContext {
	todos: ITodo[]
}

interface IDataProvider {
	children?: React.ReactNode
}

export const DataContext = createContext<IDataContext | null>(null);

export default function DataProvider({ children }: IDataProvider) {
	
	const [todos, setTodos] = useState(todosData);

	return (
		<DataContext.Provider value={{ todos }} >
			{children}
		</DataContext.Provider>
	)
}
