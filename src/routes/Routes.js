import {createBrowserRouter} from "react-router";
import {ErrorPage} from "../pages/ErrorPage";
import {HomePage} from "../pages/HomePage";
import {TodoDetailPage} from "../pages/TodoDetailPage";
import {DefaultLayout} from "../layouts/DefaultLayout";

export const routes = createBrowserRouter
([
	{
		path: "/",
		element: <DefaultLayout/>,
		errorElement: <ErrorPage/>,
		children: [
			{
				path: "/",
				element: <HomePage/>
			}, {
				path: "/todo/:id",
				element: <TodoDetailPage/>
			}
		]
	}
])