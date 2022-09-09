import { Button, Textarea, Input, Box, Select, Flex, Text } from '@chakra-ui/react';
import React from 'react';

type PostInputProps = {

};

const PostInput: React.FC<PostInputProps> = () => {

    return (
        <Box border='1px solid white' mt={2}
            borderRadius={15} alignContent='center'>

            <Flex w='70%' direction='column' mb={5}>
                <Text textAlign='left' p={2} fontWeight='bold' fontSize='xl'> Create a Post </Text>
                <Text textAlign='left' p={2}> Topic </Text>
                <Input placeholder='Topic'
                    border='1px solid gray'

                    borderRadius={7.5} />
                <Text textAlign='left' p={2}> Commmunity </Text>
                <Select placeholder='Tag' mt={2}>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <Text textAlign='left' p={2}> Content </Text>
                <Textarea
                    placeholder='Here is a sample placeholder'
                    border='1px solid gray'
                    borderRadius={15} mt={2}
                />

                <Button type='submit' width='full' color='gray.700' mt={3}>Submit</Button>
                <Button width='full' color='gray.700' mt={2} >Reset</Button>
            </Flex>
        </Box >
    )
}
export default PostInput;
