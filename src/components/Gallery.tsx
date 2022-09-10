import { Box, Flex, Grid, GridItem, Image, Spacer, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

type Props = {
    children: React.ReactNode;
};

const GalleryItem: React.FC<Props> = ({ children }) => {
    
    return (
        <Flex>
            <NextLink href="/community">
                <Link 
                    border="5px solid"
                    borderColor="transparent"
                    borderRadius="15"
                    _hover={{
                        borderColor: "white"
                    }}>
                    {children}
                </Link>
            </NextLink>
        </Flex>
    );
};

const Gallery: React.FC = () => {

    return (
        <Flex align='center' my={4}>
            <Grid width="100%" templateColumns='repeat(7, 1fr)' gap={5} mt={5}>
                <GridItem colSpan={1} >
                    <Flex>
                        <Spacer />
                        <Box
                            as={FaAngleLeft}
                            size="45px"
                            color="gray.400"
                            mt={10}
                        />
                    </Flex>
                </GridItem>
                <GridItem colSpan={1} >
                    <GalleryItem>
                        <Image
                            height='120px'
                            borderRadius={10}
                            src="./arts/Rectangle 7.png" />
                    </GalleryItem>
                </GridItem>
                <GridItem colSpan={1} >
                    <GalleryItem>
                        <Image
                            height='120px'
                            borderRadius={10}
                            src="./arts/Rectangle 8.png" />
                    </GalleryItem>
                </GridItem>
                <GridItem colSpan={1} >
                    <GalleryItem>
                        <Image
                            height='120px'
                            borderRadius={10}
                            src="./arts/Rectangle 9.png" />
                    </GalleryItem>
                </GridItem>
                <GridItem colSpan={1} >
                    <GalleryItem>
                        <Image
                            height='120px'
                            borderRadius={10}
                            src="./arts/Rectangle 10.png" />
                    </GalleryItem>
                </GridItem>
                <GridItem colSpan={1} >
                    <GalleryItem>
                        <Image
                            height='120px'
                            borderRadius={10}
                            src="./arts/Rectangle 11.png" />
                    </GalleryItem>
                </GridItem>
                <GridItem colSpan={1}>
                    <Box
                        as={FaAngleRight}
                        size="45px"
                        color="gray.400"
                        mt={10}
                    />
                </GridItem>
            </Grid>
        </Flex>
    )
}
export default Gallery;
