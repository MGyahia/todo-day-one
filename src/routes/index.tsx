import React, { lazy } from 'react';

import { RouteObject, Navigate } from 'react-router-dom';
import { Paths } from './paths';

const TodoList = lazy(() => import("../pages/todoList"));
const TodoDetails = lazy(() => import("../pages/todoDetails"));

export default [
	{
		path: Paths.list(),
		element: <TodoList />
	},
	{
		path: Paths.details(':id'),
		element: <TodoDetails />
	},
	{
		path: '*',
		element: <Navigate to={Paths.default()} />,
	}
] as RouteObject[];
