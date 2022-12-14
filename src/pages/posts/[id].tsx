import { Grid, GridItem, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Error from 'next/error';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Comment from '../../components/Comment';
import CommentInput from '../../components/CommentInput';
import CommunityHeader from '../../components/CommunityHeader';
import { Community, getCommunity } from '../../lib/community';
import { getThread, Thread } from '../../lib/content';
import { getUser, User } from '../../lib/user';


const PostPage: NextPage = () => {
    const [thread, setThread] = useState<Thread>();
    const [author, setAuthor] = useState<User>();
    const [community, setCommunity] = useState<Community>();
    const router = useRouter();

    useEffect(() => {
        const tid = Number(router.query.id);
        const threads = window.localStorage.getItem('threads');
        const usersData = window.localStorage.getItem('users');
        const communities = window.localStorage.getItem('communities');
        if (threads && usersData && communities) {
            const users = JSON.parse(usersData);
            const thread = getThread(tid, JSON.parse(threads));
            if (thread) {
                setThread(thread);
                const author = getUser(thread.uid, users);
                if (author) setAuthor(author);
                if (communities) {
                    const community = getCommunity(thread.communityId, JSON.parse(communities));
                    if (community) setCommunity(community);
                }
            }
        }
    }, []);

    const onCommentSubmitted = () => {
        // update states
        const threads = window.localStorage.getItem('threads');
        const users = window.localStorage.getItem('users');
        if (threads && users) {
            const tid = Number(router.query.id);
            const thread = getThread(tid, JSON.parse(threads));
            if (thread) {
                setThread(thread);
                const author = getUser(thread.uid, JSON.parse(users));
                if (author) setAuthor(author);
            }
        }
    };

    if (!thread || !author || !community) {
        console.log('thread: \n' + thread);
        console.log('author: \n' + author);
        console.log('community: \n' + community);
        return (<Error statusCode={404} />);
    } else {
        return (
            <>
                <CommunityHeader community={community} />

                <Grid templateColumns='repeat(6, 1fr)' gap={6} mt={10}>
                    <GridItem colSpan={1} />
                    <GridItem colSpan={3} >
                        <Heading>{thread.title}</Heading>
                    </GridItem>
                </Grid>

                <Comment thread={thread} author={author} />
                {thread.subthreads.map((st, i) => {
                    const users = window.localStorage.getItem('users');
                    if (users) {
                        const stAuthor = getUser(st.uid, JSON.parse(users));
                        if (stAuthor) return (
                            <Comment key={i} thread={st} author={stAuthor} />
                        );  // else
                    } // else
                    console.error('user with uid ' + st.uid + ' not found');
                    return (<></>);
                })}

                <Grid templateColumns='repeat(6, 1fr)' gap={6} mt={5}>
                    <GridItem colSpan={1} />
                    <GridItem colSpan={4}>
                        <CommentInput threadId={thread.threadId} communityId={community.communityId} onSubmitted={onCommentSubmitted} />
                    </GridItem>
                </Grid>
            </>
        )
    };
}
export default PostPage;
