import { Box, Flex, Text, Image, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { FaRegCommentDots, FaShareSquare } from 'react-icons/fa';

import { Thread } from "../lib/content";


type ThumbnailProps = {
    src: string | null;
};
const Thumbnail: React.FC<ThumbnailProps> = ({ src }) => (
    src ? <Image width='150px' height='100px' src={src} position="relative" color="blue.500" /> : <></>
);


type PostItemProps = {
    thread: Thread;
    author: string;
};
export const PostItem: React.FC<PostItemProps> = ({ thread, author }) => {

    return (
        <Link href={"/posts/" + thread.threadId}>
            <Box p={4} display={{ md: 'flex' }} border='1px solid gray' borderRadius={15} mt={3}>
                <Box flexShrink={0}>
                    <Image
                        borderRadius='lg'
                        width={{ md: 40 }}
                        src={thread.thumbnail}
                        alt='Woman paying for a purchase'
                    />
                </Box>
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                    <Link
                        mt={1}
                        display='block'
                        fontWeight='bold'
                        fontSize='lg'
                        lineHeight='normal'
                        href='#'
                    >
                        {thread.title}
                    </Link>
                    <Text mt={2} fontSize='sm' color='gray.500'>
                        {thread.content}
                    </Text>
                    <Text mt={1} fontSize='sm' color='gray.500'>
                        {thread.dateAdded}
                    </Text>
                </Box>
            </Box>
        </Link>
    );
};
export default PostItem;
