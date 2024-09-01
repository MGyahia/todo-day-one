import React, { Suspense } from 'react';

import { ErrorBoundary } from "react-error-boundary";
import ErrorMessage from './components/ErrorMessage';

import routes from './routes';
import Router from './lib/router';
import Loader from './components/Loader';

import MyApolloProvider from "./lib/apollo";
import FilterProvider from './contexts/filterContext';

function App() {
  return (
	<ErrorBoundary FallbackComponent={ErrorMessage}>
		<MyApolloProvider>
			<FilterProvider>
				<Suspense fallback={<Loader />}>
					<Router routes={routes}/>
				</Suspense>
			</FilterProvider>
		</MyApolloProvider>
	</ErrorBoundary>
  );
}

export default App;
