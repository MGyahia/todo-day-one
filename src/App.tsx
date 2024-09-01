import React, { Suspense } from 'react';

import { ErrorBoundary } from "react-error-boundary";
import ErrorMessage from './components/ErrorMessage';

import routes from './routes';
import Router from './lib/router';
import Loader from './components/Loader';

import DataProvider from './contexts/dataContext';
import FilterProvider from './contexts/filterContext';

function App() {
  return (
	<ErrorBoundary FallbackComponent={ErrorMessage}>
		<DataProvider>
			<FilterProvider>
				<Suspense fallback={<Loader />}>
					<Router routes={routes}/>
				</Suspense>
			</FilterProvider>
		</DataProvider>
	</ErrorBoundary>
  );
}

export default App;
