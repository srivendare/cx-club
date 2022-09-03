import { Box, Flex, Grid, GridItem, Image, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

type Props = {
    children: React.ReactNode;
};

const GalleryItem: React.FC<Props> = ({ children }) => {
    
    return (
        <Link href="/community">
            <Flex _hover={{
                border: "5px solid white",
                borderRadius: "15"
            }}>
                {children}
            </Flex>
        </Link>
    );
};

const Gallery: React.FC = () => {

    return (
        <Flex align='center' mt={3}>
            <Grid templateColumns='repeat(7, 1fr)' gap={5} mt={5}>
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
