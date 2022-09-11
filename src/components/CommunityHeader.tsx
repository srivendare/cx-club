import { Box, Flex, Button, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { Community } from '../lib/community';

type CommunityHeaderProps = {
    community: Community;
};

const CommunityHeader: React.FC<CommunityHeaderProps> = ({ community }) => {

    return (
        <Flex direction="column" width="100%" height="190px">
            <Box height="50%" bg="gray.700" />
            <Flex justifyContent="center" bg="gray.600" height="50%">
                <Flex width="95%" maxWidth="900px">
                    {/* IMAGE URL IS ADDED AT THE VERY END BEFORE DUMMY DATA - USE ICON AT FIRST */}

                    <Image
                        borderRadius="full"
                        boxSize="90px"
                        src={community.logo}
                        position="relative"
                        top={-3}
                        color="blue.500"
                        border="4px solid white"
                    />
                    <Flex padding="10px 16px" >
                        <Flex direction="column" mr={6}>
                            <Text fontWeight={800} fontSize="16pt">
                                {community.name}
                            </Text>
                            <Text fontWeight={600} fontSize="10pt" color="gray.400" 
                                width='550px' mr={5}
                            >
                                {community.description}
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
