import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    Center,
    Text
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

type ProfileCardProps = {

};

const ProfileCard: React.FC<ProfileCardProps> = () => {

    return (

        <Stack
            spacing={4}
            w={'full'}
            maxW={'md'}
            bg='gray.700'
            border='1px solid white'
            rounded={'xl'}
            boxShadow={'lg'}
            p={6}
            my={12}>
            <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                User Profile
            </Heading>
            <FormControl id="userName" mt={2}>
                <Stack direction={['column', 'row']} spacing={6}>
                    <Center>
                        <Avatar size="xl" src='/favicon.ico'>

                        </Avatar>
                    </Center>
                    <Center w="30%">
                        <Button w="full" color='gray.600'>Change Profile</Button>
                    </Center>
                    <Center w="30%">
                        <Button w="full" color='gray.600'>Edit info</Button>
                    </Center>
                </Stack>
            </FormControl>
            <FormControl id="userName" isRequired>
                <Text color='white'>User name</Text>

            </FormControl>
            <FormControl id="email" isRequired>
                <Text color='white'>Email Address</Text>

            </FormControl>
            <FormControl id="Others" isRequired>
                <Text color='white'>Others</Text>

            </FormControl>
            <Stack spacing={6} direction={['column', 'row']}>


            </Stack>
        </Stack>

    )
}
export default ProfileCard;