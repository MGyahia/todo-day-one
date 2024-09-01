import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { ITodo } from "../../types/todo";
import { useQuery, useMutation } from '@apollo/client';
import { GET_TODO_BY_ID, UPDATE_TODO } from "./todoDetails.query";

export default function useTodoDetails() {
	
	const [todo, setTodo] = useState<ITodo>();
	const { id } = useParams<{ id: string }>();
	const [updateTodoStatusById] = useMutation(UPDATE_TODO);
	const { loading, error, data } = useQuery(GET_TODO_BY_ID, {
		variables: {
			id
		},
	});

	useEffect(() => {
		if (data?.getTodoById) setTodo(data?.getTodoById);
	}, [data]);

	const setDone = (isDone: boolean) => {
		updateTodoStatusById({ variables: { id, isDone } });
	};

	return {
		todo,
		setDone,
		loading,
		error
	};
}