import {useContext, useReducer} from "react";
import "./App.css"
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {createBrowserRouter, NavLink, Outlet, RouterProvider, useParams} from "react-router";
import {ErrorPage} from "./pages/ErrorPage";
import {HomePage} from "./pages/HomePage";
import {TodoItem} from "./components/TodoItem";

function DefaultLayout() {
	return <div>
		<header>
			<nav>
				<ul>
					<li><NavLink to={"/"}>Home</NavLink></li>
					<li><NavLink to={"/todo/:id"}>Detail</NavLink></li>
				</ul>
			</nav>
		</header>
		<main>
			<Outlet/>
		</main>
	</div>;
}

function TodoDetailPage() {
	const {id} = useParams()
	const {state, dispatch} = useContext(TodoContext)
	const todo = state.filter((todo) => todo.id === parseInt(id))
	
	if (todo.length === 0) {
		return <div>Not Found</div>
	}
	return <div>
		<TodoItem todo={todo[0]} index={id}/>
	</div>
}

const routes = createBrowserRouter
([
	{
		path: "/",
		element: <DefaultLayout/>,
		errorElement: <ErrorPage/>,
		children: [
			{
				path: "/",
				element: <HomePage/>
			},{
				path: "/todo/:id",
				element: <TodoDetailPage/>
			}
		]
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