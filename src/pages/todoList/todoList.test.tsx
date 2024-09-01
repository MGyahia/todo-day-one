import React from 'react';
import * as router from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import TodoListPage from './index';
import useTodoList from './todoList.hook';

const navigate = jest.fn();
jest.mock('./todoList.hook');


describe('TodoListPage', () => {

	beforeEach(() => {
		jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
	})
	it('displays todo list', () => {
		const todos = [
		  { id: '1', title: 'Todo 1', isDone: false },
		  { id: '2', title: 'Todo 2', isDone: true },
		];
		(useTodoList as jest.Mock).mockReturnValue({ loading: false, todos, error: null });
		
		render(
		  	<MockedProvider mocks={[]} addTypename={false}>
				<TodoListPage />
			</MockedProvider>
		);
		
		expect(screen.getByText('TODO List')).toBeInTheDocument();
		expect(screen.getByText('Todo 1')).toBeInTheDocument();
		expect(screen.getByText('Todo 2')).toBeInTheDocument();
	});
})