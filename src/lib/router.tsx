
import { BrowserRouter, useRoutes, RouteObject } from "react-router-dom";

interface IRouterProps {
	routes: RouteObject[]
}

function Router({ routes }: IRouterProps) {
	return useRoutes(routes);
}

export default function RouterWrapper({ routes }: IRouterProps) {
	return (
		<BrowserRouter>
			<Router routes={routes} />
		</BrowserRouter>
	);
}

