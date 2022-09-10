import { Box, Text, Image, useColorModeValue, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import { Thread } from "../lib/content";


type ThumbnailProps = {
    src: string | null;
};
const Thumbnail: React.FC<ThumbnailProps> = ({ src }) => (
    src ?
        <Image
            borderRadius='lg'
            width={{ md: 40 }}
            height='100px'
            src={src}
            position="relative"
            color="blue.500"
        />
        :
        <></>
);


type PostItemProps = {
    thread: Thread;
    author: string;
};
export const PostItem: React.FC<PostItemProps> = ({ thread, author }) => {

    return (
        <NextLink href={"/posts/" + thread.threadId} passHref>
            <Link p={4} display={{ md: 'flex' }} border='1px solid gray' borderRadius={15} mt={3}
                _hover={{ bg: useColorModeValue('gray.300', 'gray.300') }}
            >
                <Box flexShrink={0}>
                    <Thumbnail src={thread.thumbnail} />
                </Box>
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                    <Box mt={1} display='block'
                        fontWeight='bold' fontSize='lg'
                        lineHeight='normal'
                    >
                        {thread.title}
                    </Box>
                    <Text mt={2} fontSize='sm' color='gray.500'>
                        {thread.content}
                    </Text>
                    <Text mt={1} fontSize='sm' color='gray.500'>
                        {thread.dateAdded}
                    </Text>
                </Box>
            </Link>
        </NextLink>
    );
};
export default PostItem;
