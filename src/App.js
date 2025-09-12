import {createContext, useContext} from "react";

export const initState = [
	{id: 1, text: "the first todo", done: false},
	{id: 2, text: "the second todo", done: false},
];
export const TodoContext = createContext()

function TodoItem(props) {
	return null;
}

function TodoGroup() {
	const {state, dispatch} = useContext(TodoContext);
	return <div>
		{
			state.map((item, index) => {
				return <TodoItem todo={item} key={index} index={index}/>
			})
		}
	</div>
}

export function todoReducer(state, action) {
	return state
}

function App() {
	const [state, dispatch] = useContext(todoReducer, initState);
	return (
		<div>
			<TodoContext.Provider value={{state, dispatch}}>
				<TodoGroup/>
			</TodoContext.Provider>
		</div>
	);
}

export default App;