import {useEffect, useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {initState, TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {routes} from "./routes/Routes";
import axios from "axios";

const api = axios.create({
	baseURL: 'https://68c7ac9f5d8d9f51473288e2.mockapi.io/todos',
	headers: {'Content-Type': 'application/json'},
	timeout: 10_000
})

function App() {
	const [state, dispatch] = useReducer(todoReducer, initState);
	useEffect(() => {
		api.get('/')
			.then(response => response.data)
			.then(todos => dispatch({type: 'LOAD_TOGGLE', payload: todos}))
	}, []);
	return (
		<div className="app-container">
			<TodoContext.Provider value={{state, dispatch}}>
				<RouterProvider router={routes}/>
			</TodoContext.Provider>
		</div>
	);
}

export default App;