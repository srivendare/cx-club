import { Button, Textarea, Input, Box, Select, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { createThread, Thread } from '../lib/content';

type PostInputProps = {
    onSubmitted: () => void;
};

const PostInput: React.FC<PostInputProps> = (props) => {
    const [inputTitle, setInputTitle] = useState("");
    const [inputText, setInputText] = useState("");

    const onClickSubmit = () => {
        if (inputTitle === '') {
            // TODO prompt 'title cannot be empty'
            console.error('title is empty');
            return;
        }
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
        const newThread: Thread = createThread(0, inputTitle, inputText, threads.length, null);
        threads.push(newThread);
        window.localStorage.setItem("threads", JSON.stringify(threads));
        console.log(window.localStorage.getItem('threads'));
        // TODO prompt 'post created'
        console.log('thread created');
        props.onSubmitted();
    };

    return (
        <Box border='1px solid white' mt={2}
            borderRadius={15} alignContent='center'>

            <Flex w='70%' direction='column' mb={5}>
                <Text textAlign='left' p={2} fontWeight='bold' fontSize='xl'> Create a Post </Text>
                <Text textAlign='left' p={2}> Title </Text>
                <Input placeholder='Topic'
                    border='1px solid gray'
                    borderRadius={7.5}
                    value={inputTitle}
                    onChange={e => {setInputTitle(e.currentTarget.value);}}/>
                <Text textAlign='left' p={2}> Content </Text>
                <Textarea
                    placeholder='Here is a sample placeholder'
                    border='1px solid gray'
                    borderRadius={15} mt={2}
                    value={inputText}
                    onChange={e => {setInputText(e.currentTarget.value);}}
                />

                <Button type='submit' width='full' color='gray.700' mt={3} onClick={onClickSubmit}>
                    Submit
                </Button>
                <Button width='full' color='gray.700' mt={2} >Reset</Button>
            </Flex>
        </Box >
    )
};
export default PostInput;
