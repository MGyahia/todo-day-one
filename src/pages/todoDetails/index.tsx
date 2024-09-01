import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Paths } from '../../routes/paths';

export default function TodoDetail() {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	return (
		<div>
			<p>{id}</p>
			<button onClick={() => navigate(Paths.default(), { replace: true })}>
				Go Back
			</button>
		</div>
	);
}