import { Flex, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import CommunityHeader from './CommunityHeader';
import CommunityNav from './CommunityNav';
import Navbar from './Navbar';
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


            <CommunityHeader />


            <Grid templateColumns='repeat(6, 1fr)' gap={6} mt={5}>
                <GridItem colSpan={1} bg='blue.500' border='1px solid green' />
                <GridItem colSpan={3} >
                    <CommunityNav />
                    <PostItem />
                </GridItem>
                <GridItem colSpan={2} bg='blue.500' />
            </Grid>



        </>
    )
}
export default Layout;