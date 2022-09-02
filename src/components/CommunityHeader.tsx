import { Box, Flex, Icon, Button, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { FaReddit } from 'react-icons/fa';

type CommunityHeaderProps = {

};

const CommunityHeader: React.FC<CommunityHeaderProps> = () => {

    return (
        <Flex direction="column" width="100%" height="190px" mt={2}>
            <Box height="50%" bg="gray.700" />
            <Flex justifyContent="center" bg="gray.600" height="50%">
                <Flex width="95%" maxWidth="900px">
                    {/* IMAGE URL IS ADDED AT THE VERY END BEFORE DUMMY DATA - USE ICON AT FIRST */}

                    <Image
                        borderRadius="full"
                        boxSize="90px"
                        src="/favicon.ico"
                        alt="Dan Abramov"
                        position="relative"
                        top={-3}
                        color="blue.500"
                        border="4px solid white"
                    />
                    <Flex padding="10px 16px" >
                        <Flex direction="column" mr={6}>
                            <Text fontWeight={800} fontSize="16pt">
                                Bored Ape Yacht Club
                            </Text>
                            <Text fontWeight={600} fontSize="10pt" color="gray.400">
                                The Bored Ape Yacht Club is a collection of 10,000 Bored Ape NFTs
                                Unique digital collections living on
                            </Text>
                        </Flex>
                        <Flex>
                            <Button
                                bg='gray.800'
                                color="gray.100"
                                height="25px"
                                pr={6}
                                pl={6}
                                mr={2}
                            >
                                Join
                            </Button>
                            <Button
                                bg='gray.800'
                                color="gray.100"
                                height="25px"
                                pr={6}
                                pl={6}
                            >
                                Post
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default CommunityHeader;