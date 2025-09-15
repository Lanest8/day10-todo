import {useContext} from "react";

import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";
import {api} from "../api/MockApi";

const putTodo = (props) => {
	return api.put(`/todos/${props.todo.id}`, {
		...props.todo,
		done: !props.todo.done
	}).then(response => response.data)
}

export function TodoItem(props) {
	const {dispatch} = useContext(TodoContext);
	const navigate = useNavigate();
	
	function makeAsDone() {
		putTodo(props)
			.then(() => {
				// API调用成功后更新本地状态
				dispatch({
					type: "TOGGLE_TODO",
					payload: {id: props.todo.id}
				});
			})
	}
	
	function deleteTodo() {
		api.delete(`/todos/${props.todo.id}`)
			.then(response => response.data)
			.then(() =>
				dispatch({
					type: "DELETE_TODO",
					payload: {id: props.todo.id}
				})
			)
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
		<button className="detail-button" onClick={viewDetail}>detail</button>
		<button className="delete-button" onClick={deleteTodo}>×</button>
	</div>;
}