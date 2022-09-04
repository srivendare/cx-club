import { Flex, Grid, GridItem, List, ListIcon, ListItem, useColorModeValue } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Link from "next/link";
import { useEffect, useState } from 'react';
import { FaBitcoin } from 'react-icons/fa';
import CommunityHeader from '../components/CommunityHeader';
import CommunityNav from '../components/CommunityNav';
import PostItem from '../components/PostItem';
import SideBar from '../components/Sidebar';
import UserBadge from '../components/UserBadge';
import { Thread } from '../utils/content';
import { getUser } from '../utils/user';

const Community: NextPage = () => {
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
            <CommunityHeader />
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
                    <UserBadge />
                    <SideBar title='生效中的提案'>
                        <List spacing={3}>
                            <ListItem _hover={{ bg: useColorModeValue('gray.500', 'gray.600') }}>
                                <Link href="/proposal">
                                    <Flex align='center'>
                                        <ListIcon as={FaBitcoin} color='yellow.300' size='20px' />
                                        <Flex>分红规则</Flex>
                                    </Flex>
                                </Link>
                            </ListItem>
                        </List>
                    </SideBar>
                    <SideBar title='社区版税池'>
                        $145
                    </SideBar>
                </GridItem>
            </Grid>
            {/* TODO create-new-post component */}
        </>
    )
}
export default Community;
