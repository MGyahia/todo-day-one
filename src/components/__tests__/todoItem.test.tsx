import React from 'react';
import { render, screen } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import TodoItem from '../todo/todoItem';
import { ITodo } from '../../types/todo';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('TodoItem', () => {
  const todo: ITodo = {
    id: '1',
    title: 'Test Todo',
    isDone: false,
    createdAt: new Date('2023-09-01'),
    type: 'Tech',
  };

  it('Renders the todo item correctly', () => {
    render(<TodoItem data={todo} />);
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByText('Tech')).toBeInTheDocument();
    expect(screen.getByText('01 September 2023')).toBeInTheDocument();
  });

  it('Applies the "done" style when the todo is completed', () => {
    const completedTodo = { ...todo, isDone: true };
    render(<TodoItem data={completedTodo} />);
    const titleElement = screen.getByText('Test Todo');
    expect(titleElement).toHaveStyle('text-decoration: line-through'); // Assuming this is the style applied when done
  });
});