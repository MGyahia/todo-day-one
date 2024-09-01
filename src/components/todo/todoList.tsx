import { ITodo } from '../../types/todo';
import TodoItem from './todoItem';

export interface ITodoList {
	list: ITodo[]
}

export default function TodoList({ list }: ITodoList) {
	
	if (list.length === 0) {
		return (<p>-- Empty List --</p>)
	}
	
	return (
		<ul>
			{list.map((item) =>
				<TodoItem
					key={item.id}
					data={item}
				/>
			)}
      	</ul>
	)
};
