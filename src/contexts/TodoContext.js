import {createContext} from "react";

export const initState = [
	{id: 1, text: "the first todo", done: false},
	{id: 2, text: "the second todo", done: false},
];

export const TodoContext = createContext()