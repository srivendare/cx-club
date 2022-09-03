import { Flex, Grid, GridItem, List, ListIcon, ListItem, useColorModeValue } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Link from "next/link";
import { FaBitcoin } from 'react-icons/fa';
import CommunityHeader from '../components/CommunityHeader';
import CommunityNav from '../components/CommunityNav';
import PostItem from '../components/PostItem';
import SideBar from '../components/Sidebar';
import UserBadge from '../components/UserBadge';

const Community: NextPage = () => {
    
    return (
        <>
            <CommunityHeader />
            <Grid templateColumns='repeat(6, 1fr)' gap={6} mt={5}>
                <GridItem colSpan={1} />
                <GridItem colSpan={3} >
                    <CommunityNav />
                    <PostItem />
                </GridItem>
                <GridItem colSpan={2}>
                    <UserBadge />
                    <SideBar title='生效中的提案'>
                        <List spacing={3}>
                            <ListItem _hover={{ bg: useColorModeValue('gray.500', 'gray.600') }}>
                                <Link href="/proposal">
                                    <Flex align='center'>
                                        <ListIcon as={FaBitcoin} color='yellow.300' size='20px' />
                                        <Flex>分红规则</Flex>
                                    </Flex>
                                </Link>
                            </ListItem>
                        </List>
                    </SideBar>
                    <SideBar title='社区版税池'>
                        $145
                    </SideBar>
                </GridItem>
            </Grid>
        </>

        // <main className={styles.main}>
        //     <div className={styles.grid}>Community 加入 Description 发帖</div>

        //     <div className={styles.grid}>帖子 搜索 交易大厅</div>
        //     <div className={styles.card}>
        //         <Link href="/post">Example post</Link>
        //     </div>
        //     <div className={styles.card}>
        //         <Link href="/proposal">Example proposal</Link>
        //     </div>
        //     <div className={styles.card}>
        //         <Link href="/saleitem">Example sale item</Link>
        //     </div>

        //     <div className={styles.grid}>My profile</div>

        //     <div className={styles.grid}>生效中的提案</div>
        //     <div className={styles.card}>
        //         <Link href="/proposal">Example proposal</Link>
        //     </div>

        //     <div className={styles.grid}>发帖区域</div>
        // </main>
    )
}
export default Community;
