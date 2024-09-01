import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { ITodo } from '../../types/todo';
import { Paths } from '../../routes/paths';

interface ItodoItem {
	data: ITodo
}

export default function TodoItem({ data }: ItodoItem) {
	const navigate = useNavigate();
	return (
		<li key={data.id} onClick={() => navigate(Paths.details(data.id))}>
            <p>{data.type}</p>
			<h4>{data.title}</h4>
			<p>{moment(data.createdAt+'').format('DD MMMM YYYY')}</p>
        </li>
	)
}
