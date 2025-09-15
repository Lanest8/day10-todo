import axios from "axios";

export const api = axios.create({
	baseURL: 'https://68c7ac9f5d8d9f51473288e2.mockapi.io/todos',
	headers: {'Content-Type': 'application/json'},
	timeout: 10_000
})