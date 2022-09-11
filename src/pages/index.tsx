import { Grid, GridItem, List, Image, ListItem, useColorModeValue, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link';
import { useEffect, useState } from 'react';

import CommunityNav from '../components/CommunityNav'
import Gallery from '../components/Gallery'
import PostItem from '../components/PostItem'
import SideBar from '../components/Sidebar'
import { Community } from '../lib/community';
import type { Thread } from '../lib/content';
import { getUser } from '../lib/user';


const HomePage: NextPage = () => {
    const [users, setUsers] = useState([]);
    const [threads, setThreads] = useState<Thread[]>([]);
    const [communities, setCommunites] = useState<Community[]>([]);

    useEffect(() => {
        const usersData = window.localStorage.getItem('users');
        if (usersData) setUsers(JSON.parse(usersData));
        const threadsData = window.localStorage.getItem('threads');
        if (threadsData) setThreads(JSON.parse(threadsData));
        const communitiesData = window.localStorage.getItem('communities');
        if (communitiesData) setCommunites(JSON.parse(communitiesData))
    }, []);

    return (
        <>
            <Gallery communities={communities}/>
            <Grid templateColumns='repeat(6, 1fr)' gap={6} mt={5}>
                <GridItem colSpan={1} />
                <GridItem colSpan={3} >
                    <CommunityNav />
                    {threads.map((thread, i) => {
                        const author = getUser(thread.uid, users);
                        if (author) {
                            const authorName = author.name;
                            return (<PostItem key={i} thread={thread} author={authorName} />);
                        } else {
                            return (<></>);
                        }
                    })}
                </GridItem>
                <GridItem colSpan={2}>
                    <SideBar title='Top Communities'>
                        <List spacing={3}>
                            {communities.map((co, i) => (
                                <ListItem key={i} _hover={{ bg: 'gray.500' }}>
                                    <Link href={'/communities/' + co.communityId}>
                                        <Flex align='center'>
                                            <Image
                                                boxSize="20px"
                                                src={co.logo}
                                                position="relative"
                                                color="blue.500"
                                            />
                                            <Flex px={2}>{co.name}</Flex>
                                        </Flex>
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </SideBar>
                </GridItem>
            </Grid>
        </>
    )
};
export default HomePage;
