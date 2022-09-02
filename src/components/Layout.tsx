import { Flex, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import CommunityHeader from './CommunityHeader';
import CommunityNav from './CommunityNav';
import Gallery from './Gallery';
import Navbar from './Navbar';
import PostItem from './PostItem';
import SearchInput from './SearchInput';
import TopList from './TopList';
import UserBadge from './UserBadge'


interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {

    return (
        <>
            <Navbar />
            {/* <main>{children}</main> */}

            {/* <Coummities /> */}
            <Gallery />

            <CommunityHeader />


            <Grid templateColumns='repeat(6, 1fr)' gap={6} mt={5}>
                <GridItem colSpan={1} />
                <GridItem colSpan={3} >
                    <CommunityNav />
                    <PostItem />
                </GridItem>
                <GridItem colSpan={2}>
                    <UserBadge />
                    <TopList />
                </GridItem>
            </Grid>



        </>
    )
}
export default Layout;