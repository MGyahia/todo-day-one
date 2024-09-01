import { ITodo } from '../../types/todo';

export interface ITodoList {
	list: ITodo[]
}

export default function TodoList({ list }: ITodoList) {
	return (
		<ul>
			{list.map((item) =>
				<li
					key={item.id}
				>
					{item.title}
				</li>
			)}
      	</ul>
	)
};
