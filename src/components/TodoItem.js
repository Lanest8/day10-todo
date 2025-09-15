import {useContext} from "react";

import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";

export function TodoItem(props) {
	const {state, dispatch} = useContext(TodoContext);
	const navigate = useNavigate();
	function makeAsDone() {
		dispatch({
			type: "TOGGLE_TODO",
			payload: {id: props.todo.id}
		})
	}
	
	function deleteTodo() {
		dispatch({
			type: "DELETE_TODO",
			payload: {id: props.todo.id}
		});
	}
	
	function viewDetail() {
		if (props.todo.done) {
			navigate(`/done/${props.todo.id}`);
		} else {
			navigate(`/todo/${props.todo.id}`);
		}
	}
	
	return <div className={"todo-item"}>
		<span
			className={props.todo.done ? "todo-done" : ""}
			onClick={makeAsDone}
		>
			{props.todo.text}
		</span>
		<button className="detail-button" onClick={viewDetail}>查看详细</button>
		<button className="delete-button" onClick={deleteTodo}>×</button>
	</div>;
}