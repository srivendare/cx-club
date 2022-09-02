import React from 'react';
import { Avatar, Badge, Box, Flex, Text } from '@chakra-ui/react';


const UserBadge: React.FC = () => {

    return (
        <Flex mt={5}>
            <Avatar src='./favicon.ico' />
            <Box ml='3'>
                <Text fontWeight='bold'>
                    User Name
                    <Badge ml='1' colorScheme='green'>
                        New
                    </Badge>
                </Text>
                <Text fontSize='sm'></Text>
            </Box>
        </Flex>
    )
}
export default UserBadge;