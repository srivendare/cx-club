import { Flex, Image, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
// 1. import the icon from "react-icons", https://react-icons.github.io/react-icons
import SearchInput from './SearchInput';
import Wallet from "./Wallet";

type Props = {
    children: React.ReactNode;
};

const ReturnerToHomepage: React.FC<Props> = ({ children }) => {
    const router = useRouter();
    const isOnHomepage = router.asPath === "/";
    const bg = useColorModeValue('gray.600', 'gray.700');

    return isOnHomepage ? (
        <>{children}</>
    ) : (
        <Link href="/">
            <Flex borderRadius={4} _hover={{ bg: bg }}>
                {children}
            </Flex>
        </Link>
    );
}

const Navbar: React.FC = () => {

    return (
        <Flex height='60px' bg='gray.800' padding='6px 12px'>
            <ReturnerToHomepage>
                <Flex align='center'>
                    <Image src='/favicon.ico' height='45px' />
                    <Flex padding='6px 12px' fontSize='18px' color='white'> CX Club</Flex>
                </Flex>
            </ReturnerToHomepage>

            <Flex align='center' padding='6px 12px' flexGrow={1}>
                <Grid templateColumns='repeat(5, 1fr)' gap={6} flexGrow={1} >
                    <GridItem w='100%' h='10' />
                    <GridItem w='200%' h='10' mt={2}> <SearchInput /> </GridItem>
                    <GridItem w='100%' h='10' />
                    <GridItem w='100%' h='10' />
                    <GridItem w='100%' h='10' mt={1}> <Wallet /> </GridItem>
                </Grid>
            </Flex>
        </Flex>
    );
};
export default Navbar;