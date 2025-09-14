import {useReducer, useState} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoGroup} from "./components/TodoGroup";
import {TodoContext} from "./contexts/TodoContext";

export const initState = [
	{id: 1, text: "the first todo", done: false},
	{id: 2, text: "the second todo", done: false},
];

function App() {
	const [state, dispatch] = useReducer(todoReducer, initState);
	
	const [inputValue, setInputValue] = useState("");
	
	const handleAddTodo = () => {
		if (inputValue.trim()) {
			dispatch({
				type: "ADD_TODO",
				payload: {text: inputValue}
			});
			setInputValue("");
		}
	};
	
	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleAddTodo();
		}
	};
	
	return (
		<div className="app-container">
			<div className="header">
				<h1>Todo List</h1>
			</div>
			
			<TodoContext.Provider value={{state, dispatch}}>
				<TodoGroup/>
			</TodoContext.Provider>
			
			<div className="input-section">
				<input
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyPress={handleKeyPress}
					className="todo-input"
				/>
				<button onClick={handleAddTodo} className="add-button">add</button>
			</div>
		</div>
	);
}

export default App;