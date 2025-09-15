import { useParams } from "react-router";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoItem } from "../components/TodoItem";

export function DoneListPage() {
	const { id } = useParams();
	const { state} = useContext(TodoContext);
	if (id) {
		const todo = state.filter((todo) => todo.id === parseInt(id));
		
		if (todo.length === 0) {
			return <div>Not Found</div>;
		}
		return (
			<div>
				<TodoItem todo={todo[0]} index={id} />
			</div>
		);
	}
	const doneTodos = state.filter(todo => todo.done);
	return (
		<div>
			<h2>DoneList</h2>
			{doneTodos.length === 0 ? (
				<p>DoneList is empty</p>
			) : (
				<ul>
					{doneTodos.map((todo, index) => (
						<li key={todo.id}>
							<TodoItem todo={todo} index={index} />
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
