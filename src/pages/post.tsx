import { Image, Badge, Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import type { NextPage } from 'next'
import CommunityHeader from '../components/CommunityHeader';

const Post: NextPage = () => {

    return (
        <>
            <CommunityHeader />

            <Grid templateColumns='repeat(6, 1fr)' gap={6} mt={10}>
                <GridItem colSpan={1} />
                <GridItem colSpan={3} >
                    <Heading>制作了一个mfer的周边</Heading>
                </GridItem>
            </Grid>

            <Grid templateColumns='repeat(6, 1fr)' gap={6} mt={5}>
                <GridItem colSpan={1} />
                <GridItem colSpan={1}>
                    <Flex direction="column" width="100%" height="200px" mt={5} border='1px solid gray' borderRadius={15} bg="gray.600">
                        <Image boxSize={20} src='./favicon.ico' margin={5} borderRadius={10} />
                        <Box mx={5}>
                            <Text fontWeight='bold'>User Name</Text>
                            <Badge ml='1' colorScheme='green'>New</Badge>
                        </Box>
                    </Flex>
                </GridItem>
                <GridItem colSpan={3} >
                    <GridItem colSpan={1}></GridItem>
                    <GridItem colSpan={2}>
                        <Flex direction="column" width="100%" height="200px" mt={5} border='1px solid gray' borderRadius={15} bg="gray.600">
                            <Text mx={6} my={8}>
                                ig在仁川夺冠粉丝叫自己仁川人<br />
                                fpx在巴黎夺冠粉丝叫自己巴黎人<br />
                                edg在冰岛夺冠粉丝叫自己冰岛人<br />
                                要是拳头在日本办世界赛，我们lpl的某一只队伍夺冠了，粉丝是不是要叫自己日本人啊<br />
                            </Text>
                        </Flex>
                    </GridItem>
                </GridItem>
            </Grid>
        </>
    );
}
export default Post;
