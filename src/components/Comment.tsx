import { Badge, Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { Thread } from "../lib/content";
import { User } from "../lib/user";

type CommentProps = {
    thread: Thread;
    author: User;
};

const Comment: React.FC<CommentProps> = (props) => {
    const thread = props.thread;
    const author = props.author;

    return (
        <Grid templateColumns='repeat(24, 1fr)' gap={1} mt={2} mb={-4}>
            <GridItem colSpan={4} />
            <GridItem colSpan={3}>
                <Flex direction="column" width="100%" height="200px" mt={5} border='transparent' bg="gray.600">
                    <Image boxSize={20} src={author.avatar} margin={5} borderRadius={10} />
                    <Box mx={5}>
                        <Text fontWeight='bold'>{author.name}</Text>
                        <Badge ml='1' colorScheme='green'>New</Badge>
                    </Box>
                </Flex>
            </GridItem>
            <GridItem colSpan={13}>
                <Flex direction="column" width="100%" height="200px" mt={5} bg="gray.600">
                    <Text mx={6} my={8}>{thread.content}</Text>
                </Flex>
            </GridItem>
        </Grid>
    );
};
export default Comment;
