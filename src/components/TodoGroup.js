import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "./TodoItem";


export function TodoGroup() {
	const {state, dispatch} = useContext(TodoContext);
	
	if (state.length === 0) {
		return (
			<p>Add the things you need to do today...</p>
		);
	}
	
	return <div>
		{
			state.map((item, index) => {
				return <TodoItem todo={item} key={index} index={index}/>
			})
		}
	</div>
}