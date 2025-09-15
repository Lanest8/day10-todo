import {NavLink, Outlet} from "react-router";

export function DefaultLayout() {
	return <div>
		<header>
			<nav>
				<ul>
					<li><NavLink to={"/"}>Home</NavLink></li>
					<li><NavLink to={"/todo/:id"}>Detail</NavLink></li>
					<li><NavLink to={"/done"}>Done</NavLink></li>
				</ul>
			</nav>
		</header>
		<main>
			<Outlet/>
		</main>
	</div>;
}