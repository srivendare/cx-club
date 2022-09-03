import { Box, Flex, Text, Image, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { FaRegCommentDots, FaShareSquare } from 'react-icons/fa';

const PostItem: React.FC = () => {

    return (
        <Link href="/post">
            <Flex direction="column" width="100%" height="140px" mt={5} border='1px solid gray' borderRadius={15}>

                <Flex 
                    justifyContent="center" 
                    bg="gray.600" 
                    _hover={{ bg: useColorModeValue('gray.300', 'gray.300') }} 
                    height="100%" 
                    borderRadius={15}>
                    <Flex align='center' width="95%" maxWidth="900px">

                        <Image
                            boxSize="90px"
                            src="/favicon.ico"
                            position="relative"
                            color="blue.500"
                        />
                        <Flex padding="10px 16px" >
                            <Flex direction="column" mr={6}>
                                <Text fontWeight={600} fontSize="12pt">
                                    Bored Ape Yacht Club
                                </Text>
                                <Text fontWeight={400} fontSize="10pt" color="gray.400">
                                    The Bored Ape Yacht Club is a collection of 10,000 Bored Ape NFTs
                                    Unique digital collections living on
                                </Text>
                                <Text fontWeight={400} fontSize="10pt" color="gray.400" mt={2}>
                                    2022/09/01
                                </Text>
                            </Flex>
                            <Flex align='center'>
                                <Box
                                    as={FaRegCommentDots}
                                    size="30px"
                                    color="gray.400"
                                    mr={5}
                                />
                                <Box
                                    as={FaShareSquare}
                                    size="30px"
                                    color="gray.400"
                                />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Link>
    );
}
export default PostItem;
