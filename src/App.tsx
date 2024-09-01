import React from 'react';

import { ErrorBoundary } from "react-error-boundary";
import ErrorMessage from './components/ErrorMessage';

function App() {
  return (
	<ErrorBoundary FallbackComponent={ErrorMessage}>
		<p>Test</p>
	</ErrorBoundary>
  );
}

export default App;
