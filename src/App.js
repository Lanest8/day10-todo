import {useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {TodoList} from "./components/TodoList";

export const initState = [
	{id: 1, text: "the first todo", done: false},
	{id: 2, text: "the second todo", done: false},
];

function App() {
	const [state, dispatch] = useReducer(todoReducer, initState);
	
	return (
		<div className="app-container">
			<div className="header">
				<h1>Todo List</h1>
			</div>
			
			<TodoContext.Provider value={{state, dispatch}}>
				<TodoList/>
			</TodoContext.Provider>
		</div>
	);
}

export default App;