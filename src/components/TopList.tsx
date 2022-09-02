import { List, ListItem, ListIcon, Flex } from '@chakra-ui/react';
import React from 'react';
import { FaBitcoin, FaBtc } from 'react-icons/fa';


const TopList: React.FC = () => {

    return (
        <>
            <Flex mt={3} fontSize='18' fontWeight='bold'>Top Communities</Flex>
            <Flex
                width='50%'
                border='1px solid gray'
                mt={5} p='3' bg='gray.600' borderRadius={15}>
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={FaBitcoin} color='yellow.300' size='20px' />
                        1. BTC
                    </ListItem>
                    <ListItem>
                        <ListIcon as={FaBtc} color='orange.300' />
                        2. BTH
                    </ListItem>
                </List>
            </Flex>
        </>
    )
}
export default TopList;
