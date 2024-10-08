import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../routes/paths';
import useTodoDetails from './todoDetails.hook';

export default function TodoDetail() {
	const navigate = useNavigate();
  	const {todo, setDone, loading, error} = useTodoDetails();

	if (loading) return <p>Loading...</p>;
  	if (error) return <p>Error: {error.message}</p>;

	if (!todo) {
		return (
			<div>
				<p>Todo is not found !</p>
				<button onClick={() => navigate(Paths.default(), { replace: true })}>
					Go Back
				</button>
			</div>
		)
	}

  	return (
		<div>
			<button onClick={() => navigate(Paths.list())}>
				Go Back
			</button>
			<h1>{todo.title}</h1>
			<p>Type: {todo.type}</p>
			<p>Created At: {moment(todo.createdAt as Date).format('DD MMMM YYYY')}</p>
			<p>Status: {todo.isDone ? 'Completed' : 'Not Completed'}</p>
			<button onClick={() => setDone(!todo.isDone)}>
				{todo.isDone ? 'Mark as Incomplete' : 'Mark as Complete'}
			</button>
		</div>
 	);
};