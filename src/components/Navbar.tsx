import { PhoneIcon } from '@chakra-ui/icons';
import { Flex, Image, Box, InputRightElement, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
// 1. import the icon from "react-icons", https://react-icons.github.io/react-icons
import { FaWallet } from "react-icons/fa"
import SearchInput from './SearchInput';


const Navbar: React.FC = () => {

    return (
        <Flex height='60px' bg='gray.800' padding='6px 12px'>
            <Flex align='center'>
                <Image src='/favicon.ico' height='45px' />
                <Flex padding='6px 12px' fontSize='18px' color='white'> CX Club</Flex>


            </Flex>
            {/* doc:https://chakra-ui.com/docs/components/grid */}
            <Flex align='center' padding='6px 12px' flexGrow={1}>
                <Grid templateColumns='repeat(5, 1fr)' gap={6} flexGrow={1} >
                    <GridItem w='100%' h='10' />
                    <GridItem w='200%' h='10' mt={2}> <SearchInput /> </GridItem>
                    <GridItem w='100%' h='10' />
                    <GridItem w='100%' h='10' />
                    <GridItem w='100%' h='10' mt={3}> <Box as={FaWallet} size="25px" color="gray.200" /> </GridItem>

                </Grid>

            </Flex>


        </Flex>
    )
}
export default Navbar;