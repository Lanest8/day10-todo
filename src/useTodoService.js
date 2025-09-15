import {api} from "./api/MockApi";

export function useToService() {
	const loadTodos = () => {
		return api.get('/todos')
			.then(response => response.data);
	}
	
	const createTodo = (inputValue) => {
		return api.post("/todos", {text: inputValue.trim(), done: false})
			.then(response => response.data);
	}
	
	const putTodo = (props) => {
		return api.put(`/todos/${props.todo.id}`, {
			...props.todo,
			done: props.todo.done
		}).then(response => response.data)
	}
	
	const deleteTodo = (props) => {
		return api.delete(`/todos/${props.todo.id}`)
			.then(response => response.data)
	}
	
	return {loadTodos, createTodo, putTodo, deleteTodo}
}