import { Grid, GridItem, List, Image, ListItem, useColorModeValue, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link';
import { useEffect, useState } from 'react';

import CommunityNav from '../components/CommunityNav'
import Gallery from '../components/Gallery'
import PostItem from '../components/PostItem'
import SideBar from '../components/Sidebar'
import type { Thread } from '../lib/content';
import { getUser } from '../lib/user';


const Home: NextPage = () => {
    const [users, setUsers] = useState([]);
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        const usersData = window.localStorage.getItem('users');
        if (usersData) setUsers(JSON.parse(usersData));
        const threadsData = window.localStorage.getItem('threads');
        if (threadsData) setThreads(JSON.parse(threadsData));
    }, []);

    return (
        <>
            <Gallery />
            <Grid templateColumns='repeat(6, 1fr)' gap={6} mt={5}>
                <GridItem colSpan={1} />
                <GridItem colSpan={3} >
                    <CommunityNav />
                    {threads.map((thread: Thread) => {
                        const author = getUser(thread.uid, users);
                        if (author) {
                            const authorName = author.name;
                            return (<PostItem key={thread.uid} thread={thread} author={authorName} />);
                        } else {
                            return (<></>);
                        }
                    })}
                </GridItem>
                <GridItem colSpan={2}>
                    <SideBar title='Top Communities'>
                        <List spacing={3}>
                            <ListItem _hover={{ bg: useColorModeValue('gray.500', 'gray.600') }}>
                                <Link href="/community">
                                    <Flex align='center'>
                                        <Image
                                            boxSize="20px"
                                            src="/favicon.ico"
                                            position="relative"
                                            color="blue.500"
                                        />
                                        <Flex px={2}>Bored Ape Yacht Club</Flex>
                                    </Flex>
                                </Link>
                            </ListItem>
                            <ListItem _hover={{ bg: useColorModeValue('gray.500', 'gray.600') }}>
                                <Link href="/community">
                                    <Flex align='center'>
                                        <Image
                                            boxSize="20px"
                                            src="/favicon.ico"
                                            position="relative"
                                            color="blue.500"
                                        />
                                        <Flex px={2}>NM$L Club</Flex>
                                    </Flex>
                                </Link>
                            </ListItem>
                        </List>
                    </SideBar>
                </GridItem>
            </Grid>
        </>
    )
};
export default Home;
