import {useEffect, useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {initState, TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {routes} from "./routes/Routes";
import {api} from "./api/MockApi";

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