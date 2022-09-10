import { Flex, Image, Grid, GridItem, useColorModeValue, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
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
        <NextLink href="/" passHref><Link borderRadius={4} _hover={{ bg: bg }}>
            {children}
        </Link></NextLink>
    );
}

const Navbar: React.FC = () => {

    return (
        <Flex h='50px' bg='gray.800'>
            <ReturnerToHomepage>
                <Flex align='center'>
                    <Image src='/favicon.ico' boxSize='50px' />
                    <Flex pl={3} pr={4} fontSize='18px' fontWeight='900' color='white'>Onlybuilders</Flex>
                </Flex>
            </ReturnerToHomepage>

            <Flex align='center' flexGrow={1}>
                <Grid templateColumns='repeat(5, 1fr)' gap={6} flexGrow={1} >
                    <GridItem colSpan={1} />
                    <GridItem colSpan={2} mt={2}> <SearchInput /> </GridItem>
                    <GridItem colSpan={1} />
                    <GridItem colSpan={1} mt={1}> <Wallet /> </GridItem>
                </Grid>
            </Flex>
        </Flex>
    );
};
export default Navbar;
