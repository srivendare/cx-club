import { Box, Flex, Grid, GridItem, Image, Spacer } from '@chakra-ui/react';
import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

type GalleryProps = {

};

const Gallery: React.FC<GalleryProps> = () => {

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
                    <Image
                        height='120px'
                        borderRadius={10}
                        src="./arts/Rectangle 7.png" />
                </GridItem>
                <GridItem colSpan={1} >
                    <Image
                        height='120px'
                        borderRadius={10}
                        src="./arts/Rectangle 8.png" />
                </GridItem>
                <GridItem colSpan={1} >
                    <Image
                        height='120px'
                        borderRadius={10}
                        src="./arts/Rectangle 9.png" />
                </GridItem>
                <GridItem colSpan={1} >
                    <Image
                        height='120px'
                        borderRadius={10}
                        src="./arts/Rectangle 10.png" />
                </GridItem>
                <GridItem colSpan={1} >
                    <Image
                        height='120px'
                        borderRadius={10}
                        src="./arts/Rectangle 11.png" />
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