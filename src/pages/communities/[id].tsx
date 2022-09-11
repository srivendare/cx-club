import { Flex, Grid, GridItem, List, ListIcon, ListItem, useColorModeValue } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Error from 'next/error';
import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaBitcoin } from 'react-icons/fa';

import CommunityHeader from '../../components/CommunityHeader';
import CommunityNav from '../../components/CommunityNav';
import PostInput from '../../components/PostInput';
import PostItem from '../../components/PostItem';
import SideBar from '../../components/Sidebar';
import UserBadge from '../../components/UserBadge';
import { Community, getCommunity } from '../../lib/community';
import type { Thread } from '../../lib/content';
import { getUser } from '../../lib/user';


const CommunityPage: NextPage = () => {
    const [users, setUsers] = useState([]);
    const [threads, setThreads] = useState<Thread[]>([]);
    const [community, setCommunity] = useState<Community>();
    const router = useRouter();
    
    useEffect(() => {
        const cid = Number(router.query.id);  // TODO write this as a state
        const usersData = window.localStorage.getItem('users');
        if (usersData) setUsers(JSON.parse(usersData));
        const threadsData = window.localStorage.getItem('threads');
        if (threadsData) {
            const allThreads: Thread[] = JSON.parse(threadsData);
            const threads = allThreads.filter((t) => t.communityId === cid);
            setThreads(threads);
        }
        const communitiesData = window.localStorage.getItem('communities');
        if (communitiesData) {
            const community = getCommunity(cid, JSON.parse(communitiesData));
            if (community) setCommunity(community);
        }
    }, []);

    const onNewPostCreated = () => {
        const usersData = window.localStorage.getItem('users');
        if (usersData) setUsers(JSON.parse(usersData));
        const threadsData = window.localStorage.getItem('threads');
        if (threadsData) {
            const allThreads: Thread[] = JSON.parse(threadsData);
            const cid = Number(router.query.id);
            const threads = allThreads.filter((t) => t.communityId === cid);
            setThreads(threads);
        }
    };

    return !community ? (
        <Error statusCode={404} />
    ) : (
        <>
            <CommunityHeader community={community}/>
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
                    <PostInput communityId={community.communityId} onSubmitted={onNewPostCreated}/>
                </GridItem>
                <GridItem colSpan={2}>
                    <UserBadge />
                    <SideBar title='生效中的提案'>
                        <List spacing={3}>
                            <ListItem _hover={{ bg: 'gray.500' }}>
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
        </>
    );
}
export default CommunityPage;
