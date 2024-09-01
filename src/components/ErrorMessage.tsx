import React from 'react';

export interface IErrorMessage {
	error: Error
}

export default function ErrorMessage({ error }: IErrorMessage) {
	return (
		<div>
			<p>Something went wrong:</p>
			<pre>
				{error.message}
			</pre>
		</div>
	);
}