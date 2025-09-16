import {useEffect, useReducer} from "react";
import "./css/App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {initState, TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {routes} from "./routes/Routes";
import {useToService} from "./useTodoService";
import { unstableSetRender } from 'antd';
import { createRoot } from 'react-dom/client';

unstableSetRender((node, container) => {
	container._reactRoot ||= createRoot(container);
	const root = container._reactRoot;
	root.render(node);
	return async () => {
		await new Promise((resolve) => setTimeout(resolve, 0));
		root.unmount();
	};
});

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