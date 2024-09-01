import React, { Suspense } from 'react';

import { ErrorBoundary } from "react-error-boundary";
import ErrorMessage from './components/ErrorMessage';

import routes from './routes';
import Router from './lib/router';
import Loader from './components/Loader';

function App() {
  return (
	<ErrorBoundary FallbackComponent={ErrorMessage}>
		<Suspense fallback={<Loader />}>
			<Router routes={routes}/>
		</Suspense>
	</ErrorBoundary>
  );
}

export default App;
