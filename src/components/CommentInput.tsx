import { Button, Textarea, Input, Box, Select, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import { addSubthread, createThread, Thread } from '../lib/content';

type CommentInputProps = {
    threadId: number;
    onSubmitted: () => void;
};

const CommentInput: React.FC<CommentInputProps> = (props) => {
    const [inputText, setInputText] = useState("");

    const onClickSubmit = () => {
        if (inputText === '') {
            // TODO prompt 'content cannot be empty'
            console.error('content is empty');
            return;
        }
        const threadsData = window.localStorage.getItem('threads');
        let threads: Thread[] = [];
        if (!threadsData) {
            // TODO prompt 'cannot connect to thread data'
            console.error('cannot retrive threads data');
            return;
        }
        threads = JSON.parse(threadsData);
        const newSubthread: Thread = createThread(0, null, inputText, threads.length, null);
        threads.map((t) => {
            if (t.threadId === props.threadId) addSubthread(t, newSubthread);
        });
        window.localStorage.setItem("threads", JSON.stringify(threads));
        console.log(window.localStorage.getItem('threads'));
        // TODO prompt 'comment created'
        console.log('subthread created');
        props.onSubmitted();
    };

    return (
        <Box mt={6} alignContent='center'>
            <Flex w='70%' direction='column' mb={5}>
                <Text textAlign='left' p={2} color='gray.300'>
                    Add a comment...
                </Text>
                <Textarea
                    border='transparent'
                    borderRadius={0}
                    bg='gray.200'
                    color='gray.700'
                    placeholder='Here is a sample placeholder'
                    value={inputText}
                    onChange={e => {setInputText(e.currentTarget.value);}}
                />

                <Button maxWidth='100px' bg='gray.300' color='gray.700' mt={3} onClick={onClickSubmit}>
                    Submit
                </Button>
            </Flex>
        </Box>
    )
};
export default CommentInput;
