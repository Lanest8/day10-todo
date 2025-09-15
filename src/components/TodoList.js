import {TodoGroup} from "./TodoGroup";
import {TodoGenerator} from "./TodoGenerator";

export function TodoList() {
	return <>
		<TodoGroup/>
		<TodoGenerator/>
	</>;
}