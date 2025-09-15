import { Card, Typography, List } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export function AboutUsPage() {
	const features = [
		"Create new todo items",
		"Mark item as completed",
		"View list of completed items",
		"Delete unwanted items",
		"Edit item details",
		"View item details"
	];
	
	return (
		<div>
			<Card>
				<Title level={1}>
					<InfoCircleOutlined /> About Us
				</Title>
				<Paragraph>Welcome to our Todo List application!</Paragraph>
				<Title level={2}>Application Features</Title>
				<List
					dataSource={features}
					renderItem={item => (
						<List.Item>
							<Typography.Text strong>• {item}</Typography.Text>
						</List.Item>
					)}
				/>
				<Title level={2}>How to Use</Title>
				<Paragraph>
					On the home page, you can add new todo items, click on the task text to mark it as done,
					and click the "×" button to delete a task.
				</Paragraph>
				<Paragraph>
					Use the navigation bar to access the completed tasks list and other pages.
				</Paragraph>
			</Card>
		</div>
	);
}
