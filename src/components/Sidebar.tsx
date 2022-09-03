import { Flex } from '@chakra-ui/react';
import React from 'react';

type Props = {
    title: string;
    children: React.ReactNode;
};

const SideBar: React.FC<Props> = (props) => {
    const title = props.title;
    const children = props.children;

    return (
        <>
            <Flex mt={3} fontSize='18' fontWeight='bold'>{title}</Flex>
            <Flex
                width='50%'
                border='1px solid gray'
                mt={5} p='3' bg='gray.600' borderRadius={15}>
                {children}
            </Flex>
        </>
    )
}
export default SideBar;

