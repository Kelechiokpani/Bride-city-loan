import {
    ApolloClient,
    ApolloLink,
    createHttpLink,
    InMemoryCache,
    NormalizedCacheObject,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error'
import { useMemo } from 'react';
import { NextApiRequest, NextApiResponse } from 'next';
import {NEXT_PUBLIC_GQL_URL} from "./config";
export interface GraphQlContext {
    req: NextApiRequest;
    res: NextApiResponse;
}

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const httpLink: ApolloLink = createHttpLink({
    uri: NEXT_PUBLIC_GQL_URL,
    credentials: 'include',
})


function createApolloClient(context?: GraphQlContext) {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: ApolloLink.from([
            onError(({ graphQLErrors, networkError }) => {
                if (graphQLErrors)
                    graphQLErrors.forEach(({ message, locations, path }) =>
                        console.log(
                            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                        )
                    )
                if (networkError)
                    console.log(
                        `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
                    )
            }),
            httpLink,
        ]),
        cache: new InMemoryCache(),
    });
}

export function initializeApollo(
    initialState: any = null,
    context?: GraphQlContext
): ApolloClient<any> {
    const _apolloClient = apolloClient ?? createApolloClient(context);

    if (initialState) {
        _apolloClient.cache.restore(initialState);
    }

    if (typeof window === 'undefined') {
        return _apolloClient;
    }


    apolloClient = apolloClient ?? _apolloClient;

    return apolloClient;
}

export const getApolloClient = initializeApollo;

export function useApollo(initialState: any) {
    const apolloStore = useMemo(() => initializeApollo(initialState), [
        initialState,
    ]);
    return apolloStore;
}
