import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../todo/todoList';
import { ITodo } from '../../types/todo';


jest.mock('../todo/todoItem', () => ({ data }: { data: ITodo }) => <div>{data.title}</div>);

describe('TodoList', () => {
  it('Displays empty list message when no todos are provided', () => {
    render(<TodoList list={[]} />);
    expect(screen.getByText('-- Empty List --')).toBeInTheDocument();
  });

  it('renders a list of TodoItem components when todos are provided', () => {
    const todos: ITodo[] = [
      { id: '1', title: 'Todo 1', isDone: false, createdAt: new Date(), type: 'Tech' },
      { id: '2', title: 'Todo 2', isDone: true, createdAt: new Date(), type: 'Marketing' },
    ];

    render(<TodoList list={todos} />);
    expect(screen.getByText('Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Todo 2')).toBeInTheDocument();
  });
});
