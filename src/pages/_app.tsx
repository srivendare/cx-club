import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

import { theme } from '../lib/chakra/theme'
import Layout from '../components/Layout'
import { populateUsers } from '../lib/user'
import { populateProposals, populateThreads } from '../lib/content'
import { useEffect, useState } from 'react'
import { populateCommunities } from '../lib/community'

function App({ Component, pageProps }: AppProps) {
    const [users, setUsers] = useState(populateUsers());
    const [communities, setCommunities] = useState(populateCommunities());
    const [threads, setThreads] = useState(populateThreads());
    const [proposals, setProposals] = useState(populateProposals);

    useEffect(() => {
        const usersData = window.localStorage.getItem('users');
        if (usersData) setUsers(JSON.parse(usersData));
        const communitiesData = window.localStorage.getItem('communities');
        if (communitiesData) setCommunities(JSON.parse(communitiesData));
        const threadsData = window.localStorage.getItem('threads');
        if (threadsData) setThreads(JSON.parse(threadsData));
        const proposalsData = window.localStorage.getItem('proposals');
        if (proposalsData) setProposals(JSON.parse(proposalsData));
    }, []);

    useEffect(() => {
        window.localStorage.setItem("users", JSON.stringify(users));
        window.localStorage.setItem("communities", JSON.stringify(communities));
        window.localStorage.setItem("threads", JSON.stringify(threads));
        window.localStorage.setItem("proposals", JSON.stringify(proposals));
    }, [users, communities, threads, proposals]);

    return (
        <ChakraProvider theme={theme}>
            <Head>
                <title>Onlybuilders</title>
                <meta name="description" content="Only builders." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>

    )
}
export default App;
