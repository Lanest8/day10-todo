import {TodoGroup} from "./TodoGroup";
import {TodoGenerator} from "./TodoGenerator";

export function TodoList() {
	return <>
		<div className="header">
			<h1>Todo List</h1>
		</div>
		<TodoGroup/>
		<TodoGenerator/>
	</>;
}