import { useContext } from "react";
import { DataContext, IDataContext } from "../../contexts/dataContext";

export default function useTodoList() {
	const { todos } = useContext(DataContext) as IDataContext;

	return {
		todos
	}
}
