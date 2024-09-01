import React, { useEffect } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

export interface IApolloContextProps  { 
	children?: React.ReactNode
}

const ApolloURI: string = (process.env.REACT_APP_APOLLO_URI as string) || 'http://localhost:4000/';

const MyApolloClient = new ApolloClient({
	uri: ApolloURI,
	cache: new InMemoryCache()
});

export default function MyApolloProvider({ children }: IApolloContextProps) {
	
	useEffect(() => {
		if (!ApolloURI) throw new Error('REACT_APP_APOLLO_URI variable is not set !');
	}, []);
	
	return (
		<ApolloProvider client={MyApolloClient}>
			{children}
		</ApolloProvider>
	);
}