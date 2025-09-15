import {useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {TodoList} from "./components/TodoList";
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router";

function DefaultLayout() {
	return <div>
		<header>
			<nav>
				<ul>
					<li><NavLink to={"/"}>Home</NavLink></li>
				</ul>
			</nav>
		</header>
		<main>
			<Outlet/>
		</main>
	</div>;
}

const routes = createBrowserRouter
([
	{
		path: "/",
		element: <DefaultLayout/>,
		children: [{
			path: "/",
			element: <TodoList/>
		}]
	}
])

export const initState = [
	{id: 1, text: "the first todo", done: false},
	{id: 2, text: "the second todo", done: false},
];

function App() {
	const [state, dispatch] = useReducer(todoReducer, initState);
	
	return (
		<div className="app-container">
			<TodoContext.Provider value={{state, dispatch}}>
				<RouterProvider router={routes}/>
			</TodoContext.Provider>
		</div>
	);
}

export default App;