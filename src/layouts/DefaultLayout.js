import {NavLink, Outlet} from "react-router";
import {Layout, Menu} from "antd";
import {HomeOutlined, CheckCircleOutlined, InfoCircleOutlined} from "@ant-design/icons";
import "../css/DefaultLayout.css";

const {Header, Footer, Content} = Layout;

export function DefaultLayout() {
	const menuItems = [
		{
			key: "home",
			icon: <HomeOutlined/>,
			label: <NavLink to="/">Home</NavLink>
		},
		{
			key: "done",
			icon: <CheckCircleOutlined/>,
			label: <NavLink to="/done">Done</NavLink>
		},
		{
			key: "about",
			icon: <InfoCircleOutlined/>,
			label: <NavLink to="/about">About Us</NavLink>
		}
	];
	
	const headerStyle = {
		position: "sticky",
		top: 0,
		zIndex: 1,
		width: "100%",
		background: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
		padding: 0,
		boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
	};
	
	const menuStyle = {
		minWidth: 0,
		flex: "auto",
		background: "transparent"
	};
	
	const contentStyle = {
		padding: "24px 48px",
		minHeight: "calc(100vh - 64px)",
		background: "linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%)"
	};
	
	return (
		<Layout className="default-layout">
			<Header style={headerStyle}>
				<Menu theme="dark" mode="horizontal"
					items={menuItems} style={menuStyle}
					selectedKeys={[window.location.pathname]}
				/>
			</Header>
			<Content style={contentStyle}>
				<div style={{maxWidth: 1200, margin: "0 auto"}}>
					<Outlet/>
				</div>
			</Content>
			<Footer>@OOCL Lanest</Footer>
		</Layout>
	);
}