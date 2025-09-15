import {useEffect, useReducer} from "react";
import "./css/App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {initState, TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {routes} from "./routes/Routes";
import {useToService} from "./useTodoService";

function App() {
	const [state, dispatch] = useReducer(todoReducer, initState);
	const {loadTodos} = useToService();
	useEffect(() => {
		loadTodos()
			.then(todos => dispatch({type: 'LOAD_TOGGLE', payload: todos}))
	}, [dispatch]);
	return (
		<div className="app-container">
			<TodoContext.Provider value={{state, dispatch}}>
				<RouterProvider router={routes}/>
			</TodoContext.Provider>
		</div>
	);
}

export default App;