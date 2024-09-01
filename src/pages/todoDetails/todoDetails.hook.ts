import { useContext } from "react";
import { useParams } from 'react-router-dom';
import { DataContext, IDataContext } from "../../contexts/dataContext";
import { ITodo } from "../../types/todo";

export default function useTodoDetails() {
	const { todos } = useContext(DataContext) as IDataContext;
	const { id } = useParams<{ id: string }>();
	const todo = todos.find((todo: ITodo) => todo.id === id);
	return {
		todo
	};
}