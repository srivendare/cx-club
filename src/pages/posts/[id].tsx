import { Image, Badge, Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Error from 'next/error';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import CommunityHeader from '../../components/CommunityHeader';
import { getThread, Thread } from '../../lib/content';
import { getUser, User } from '../../lib/user';


const Post: NextPage = () => {
    const [thread, setThread] = useState<Thread>();
    const [author, setAuthor] = useState<User>();
    const router = useRouter();
    const tid = Number(router.query.id);

    useEffect(() => {
        const threads = window.localStorage.getItem('threads');
        const users = window.localStorage.getItem('users');
        if (threads && users) {
            const thread = getThread(tid, JSON.parse(threads));
            if (thread) {
                setThread(thread);
                const author = getUser(thread.uid, JSON.parse(users));
                if (author) setAuthor(author);
            }
        }
        // TODO handling if thread is 404
    }, [tid]);

    return (!thread) ? (
        <Error statusCode={404} />
    ) : (
        <>
            <CommunityHeader />
            <Grid templateColumns='repeat(6, 1fr)' gap={6} mt={10}>
                <GridItem colSpan={1} />
                <GridItem colSpan={3} >
                    <Heading>{thread?.title}</Heading>
                </GridItem>
            </Grid>

            <Grid templateColumns='repeat(6, 1fr)' gap={6} mt={5}>
                <GridItem colSpan={1} />
                <GridItem colSpan={1}>
                    <Flex direction="column" width="100%" height="200px" mt={5} border='1px solid gray' borderRadius={15} bg="gray.600">
                        <Image boxSize={20} src={author?.avatar} margin={5} borderRadius={10} />
                        <Box mx={5}>
                            <Text fontWeight='bold'>{author?.name}</Text>
                            <Badge ml='1' colorScheme='green'>New</Badge>
                        </Box>
                    </Flex>
                </GridItem>
                <GridItem colSpan={3} >
                    <GridItem colSpan={1}></GridItem>
                    <GridItem colSpan={2}>
                        <Flex direction="column" width="100%" height="200px" mt={5} border='1px solid gray' borderRadius={15} bg="gray.600">
                            <Text mx={6} my={8}>{thread?.content}</Text>
                        </Flex>
                    </GridItem>
                </GridItem>
            </Grid>
        </>
    );
}
export default Post;
