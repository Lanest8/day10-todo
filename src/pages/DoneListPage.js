import {useParams} from "react-router";
import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";
import {Card, Typography, List, Empty, Divider} from "antd";
import {CheckCircleOutlined} from "@ant-design/icons";
import styles from "../css/DoneListPage.css";

const {Title, Text} = Typography;

export function DoneListPage() {
	const { id } = useParams();
	const { state} = useContext(TodoContext);
	if (id) {
		const todo = state.filter((todo) => todo.id === parseInt(id));
		
		if (todo.length === 0) {
			return (
				<div className={styles.detailContainer}>
					<Card className={styles.detailCard}>
						<Empty description="Task not found" image={Empty.PRESENTED_IMAGE_SIMPLE}/>
					</Card>
				</div>
			);
		}
		return (
			<div className={styles.detailContainer}>
				<Card className={styles.detailCard}>
					<Title level={3} className={styles.title}>
						<CheckCircleOutlined/> Task Detail
					</Title>
					<Divider className={styles.divider}/>
					<TodoItem todo={todo[0]}/>
				</Card>
			</div>
		);
	}
	const doneTodos = state.filter(todo => todo.done);
	return (
		<div className={styles.container}>
			<Card className={styles.card}>
				<Title level={2} className={styles.mainTitle}>
					<CheckCircleOutlined/> Completed Tasks
				</Title>
				
				{doneTodos.length === 0 ? (
					<Empty
						description={
							<Text type="secondary" className={styles.emptyDescription}>
								No completed tasks
							</Text>
						}
						image={Empty.PRESENTED_IMAGE_SIMPLE}
					/>
				) : (
					<List dataSource={doneTodos}
						renderItem={(todo, index) => (
							<List.Item>
								<TodoItem todo={todo} index={index}/>
							</List.Item>
						)}
						className={styles.list}
					/>
				)}
			</Card>
		</div>
	);
}
