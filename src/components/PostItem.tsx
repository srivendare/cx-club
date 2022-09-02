import { Box, Flex, Icon, Stack, Skeleton, Spinner, Text, Image, Button } from '@chakra-ui/react';
import React from 'react';
import { FaReddit, FaRegCommentDots, FaShareSquare, FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import post from '../pages/post';



const PostItem: React.FC = () => {

    return (
        <Flex direction="column" width="100%" height="140px" mt={5} border='1px solid gray' borderRadius={15}>

            <Flex justifyContent="center" bg="gray.600" height="100%" borderRadius={15}>
                <Flex align='center' width="95%" maxWidth="900px">
                    {/* IMAGE URL IS ADDED AT THE VERY END BEFORE DUMMY DATA - USE ICON AT FIRST */}

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
    );
}
export default PostItem;