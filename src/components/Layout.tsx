import { Flex, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import CommunityHeader from './CommunityHeader';
import Navbar from './Navbar';
import PostContent from './PostContent';
import PostItem from './PostItem';
import SearchInput from './SearchInput';
import Wallet from './Wallet';


interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {

    return (
        <>
            <Navbar />
            {/* <main>{children}</main> */}

            {/* <Coummities /> */}

            {/* <Grid templateColumns='repeat(5, 1fr)' gap={6} mt={5}>
                <GridItem colSpan={1} bg='blue.500' border='1px solid green' />
                <GridItem colSpan={3} ><PostContent /></GridItem>
                <GridItem colSpan={1} bg='blue.500' />
            </Grid> */}
            <CommunityHeader />
            <PostItem />



        </>
    )
}
export default Layout;