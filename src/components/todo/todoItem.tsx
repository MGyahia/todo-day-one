import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { ITodo } from '../../types/todo';
import { Paths } from '../../routes/paths';
import { ListItem, Title, DateItem, Label } from './TodoItem.styles';

interface ItodoItem {
	data: ITodo
}

export default function TodoItem({ data }: ItodoItem) {
	const navigate = useNavigate();
	return (
		<ListItem key={data.id} onClick={() => navigate(Paths.details(data.id))}>
            <Label>{data.type}</Label>
			<Title done={data.isDone}>{data.title}</Title>
			<DateItem>{moment(data.createdAt as Date).format('DD MMMM YYYY')}</DateItem>
        </ListItem>
	)
}
