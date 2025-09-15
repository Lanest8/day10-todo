import {useContext, useState} from "react";

import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";
import {useToService} from "../useTodoService";
import {Button, Space} from "antd";
import {DeleteOutlined, EditOutlined, EyeOutlined} from "@ant-design/icons";
import {TodoModal} from "./TodoModal";

export function TodoItem(props) {
	const {dispatch} = useContext(TodoContext);
	const navigate = useNavigate();
	const {putTodo, deleteTodo} = useToService();
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [editText, setEditText] = useState(props.todo.text);
	
	function makeAsDone() {
		putTodo({
			todo: {
				...props.todo,
				done: !props.todo.done
			}
		}).then((todo) => {
				dispatch({
					type: "UPDATE_TODO",
					payload: todo
				});
			})
	}
	
	function removeTodo() {
		deleteTodo(props)
			.then(() =>
				dispatch({
					type: "DELETE_TODO",
					payload: {id: props.todo.id}
				})
			)
	}
	
	function viewDetail() {
		if (props.todo.done) {
			navigate(`/done/${props.todo.id}`);
		} else {
			navigate(`/todo/${props.todo.id}`);
		}
	}
	
	function showModal() {
		setIsModalVisible(true);
	}
	
	function handleOk() {
		putTodo({
			todo: {
				...props.todo,
				text: editText
			}
		}).then(todo => {
			dispatch({
				type: "UPDATE_TODO",
				payload: todo
			});
			setIsModalVisible(false);
		})
	}
	
	function handleCancel() {
		setEditText(props.todo.text);
		setIsModalVisible(false);
	}
	
	return (
		<div className={"todo-item"}>
			<span className={props.todo.done ? "todo-done" : ""}
				  onClick={makeAsDone}
				  style={{cursor: "pointer"}}
			>
				{props.todo.text}
			</span>
			<Space>
				<Button icon={<EyeOutlined/>} onClick={viewDetail} size="small"></Button>
				<Button icon={<EditOutlined/>} onClick={showModal} size="small"></Button>
				<Button icon={<DeleteOutlined/>} onClick={removeTodo} danger size="small"></Button>
			</Space>
			<TodoModal title="Edit" open={isModalVisible} onOk={handleOk} onCancel={handleCancel} value={editText}
					   onChange={(e) => setEditText(e.target.value)}/>
		</div>
	);
}