import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {api} from "../api/MockApi";

export function TodoGenerator() {
	const {dispatch} = useContext(TodoContext);
	const [inputValue, setInputValue] = useState("");
	
	function addTodo() {
		if (inputValue.trim()) {
			api.post("/todos", {text: inputValue.trim(), done: false})
				.then(response => response.data)
				.then(todo =>
					dispatch({type: "ADD_TODO", payload: todo})
				)
			setInputValue("");
		}
	}
	
	return <div className="input-section">
		<input
			type="text"
			value={inputValue}
			onChange={(e) => setInputValue(e.target.value)}
			className="todo-input"
		/>
		<button onClick={addTodo} className="add-button">add</button>
	</div>;
}