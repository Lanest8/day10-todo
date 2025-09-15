export function todoReducer(state, action) {
	switch (action.type) {
		case "LOAD_TOGGLE":
			return action.payload;
		case "TOGGLE_TODO":
			/// copy
			const newState = [...state];
			const id = action.payload.id;
			return newState.map((value) => {
				if (value.id === id) {
					return {
						id,
						text: value.text,
						done: !value.done
					};
				}
				
				return value
			})
		case "ADD_TODO":
			return [...state, action.payload];
		case "UPDATE_TODO":
			return state.map(todo => {
				if (todo.id === action.payload.id) {
					return action.payload;
				}
				return todo;
			})
		case "DELETE_TODO":
			return state.filter(todo => todo.id !== action.payload.id);
		default:
			return state;
	}
}