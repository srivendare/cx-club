import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';


const SearchInput: React.FC = () => {
    return (
        <Flex flexGrow={1} mr={2} align='center'>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='gray.300' mb={2} />
                </InputLeftElement>
                <Input
                    placeholder='Search Content'
                    fontSize='15px'
                    height='32px'
                    _placeholder={{ color: 'gray.500' }}
                // _hover={{
                //     border = '1px solid',
                //     borderColor = 'blue.500',
                // }}
                // _focus={{
                //     outline='none',
                //     border = '1px solid',
                //     borderColor = 'blue.500',
                // }}
                />
            </InputGroup>
        </Flex>
    )
}
export default SearchInput;