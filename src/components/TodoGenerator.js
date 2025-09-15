import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {useToService} from "../useTodoService";

export function TodoGenerator() {
	const {dispatch} = useContext(TodoContext);
	const [inputValue, setInputValue] = useState("");
	const {createTodo} = useToService();
	
	function addTodo() {
		if (inputValue.trim()) {
			createTodo(inputValue)
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