import {useContext, useState} from "react";

import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";
import {useToService} from "../useTodoService";
import {Button, Modal, Input, Space} from "antd";
import {EditOutlined, DeleteOutlined, EyeOutlined} from "@ant-design/icons";

export function TodoItem(props) {
	const {dispatch} = useContext(TodoContext);
	const navigate = useNavigate();
	const {putTodo, deleteTodo} = useToService();
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [editText, setEditText] = useState(props.todo.text);
	
	function makeAsDone() {
		putTodo(props)
			.then((todo) => {
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
			<Modal title="Edit" open={isModalVisible} onOk={handleOk}
				onCancel={handleCancel} okText="Save" cancelText="Cancel"
				okButtonProps={{
					style: {
						background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
						border: 'none',
						boxShadow: '0 4px 12px rgba(52, 152, 219, 0.3)'
					}
				}}
				cancelButtonProps={{
					style: {
						borderColor: '#3498db',
						color: '#3498db'
					}
				}}
			>
				<Input value={editText} onChange={(e) => setEditText(e.target.value)} size="large"/>
			</Modal>
		</div>
	);
}