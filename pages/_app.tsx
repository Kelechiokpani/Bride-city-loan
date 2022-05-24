import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import ExternalScripts from "../components/scripts";
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../utils/apollo';


function MyApp({ Component, pageProps }: AppProps) {
    const apolloClient = useApollo(pageProps);

    return (
        <div>
            <Head>
                <base href="" />
                <meta charSet="utf-8" />
                <meta name="author" content="DeepTechnologies" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Get Loans Easily" />
                <link rel="shortcut icon" href="/images/favicon.png" />
                <title>Bride City Loan</title>
                <link rel="stylesheet" href="/assets/css/dashlite.css?ver=3.0.2" />
                <link id="skin-default" rel="stylesheet" href="/assets/css/theme.css?ver=3.0.2" />
            </Head>

            <ApolloProvider client={apolloClient}>
                <Component {...pageProps} />
            </ApolloProvider>
            <ExternalScripts />
        </div>
    )
}

export default MyApp
