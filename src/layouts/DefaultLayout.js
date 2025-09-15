import {NavLink, Outlet} from "react-router";
import "../DefaultLayout.css";

export function DefaultLayout() {
	return (
		<div className="default-layout">
			<header>
				<nav>
					<ul>
						<li><NavLink to={"/"}>Home</NavLink></li>
						<li><NavLink to={"/done"}>Done</NavLink></li>
						<li><NavLink to={"/about"}>About us</NavLink></li>
					</ul>
				</nav>
			</header>
			<main>
				<Outlet/>
			</main>
		</div>
	);
}