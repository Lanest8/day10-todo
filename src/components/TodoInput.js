import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";

export function TodoInput() {
	const {dispatch} = useContext(TodoContext);
	const [inputValue, setInputValue] = useState("");
	
	function addTodo() {
		if (inputValue.trim()) {
			dispatch({
				type: "ADD_TODO",
				payload: {text: inputValue}
			});
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