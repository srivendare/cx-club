import { Box, Flex, Grid, GridItem, Image, Spacer, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Community } from '../lib/community';


type GalleryItemProps = {
    communityId: number;
    thumbnail: string;
};
const GalleryItem: React.FC<GalleryItemProps> = ({ communityId, thumbnail }) => {

    return (
        <Flex> {/* TODO link or nextlink style as flex */}
            <NextLink href={'/communities/' + communityId} passHref>
                <Link
                    border="5px solid"
                    borderColor="transparent"
                    borderRadius="15"
                    _hover={{
                        borderColor: "white"
                    }}>
                    <Image
                        height='120px'
                        borderRadius={10}
                        src={thumbnail} />
                </Link>
            </NextLink>
        </Flex>
    );
};

type GalleryProps = {
    communities: Community[];
};
const Gallery: React.FC<GalleryProps> = ({ communities }) => {
    const gridlength = communities.length + 2;

    return (
        <Flex align='center' my={4}>
            <Grid templateColumns={'repeat(' + gridlength + ', 1fr)'}
                width="100%" gap={5} mt={5}
            >
                <GridItem colSpan={1}>
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

                {communities.map((co, i) => (
                    <GridItem key={i} colSpan={1} >
                        <GalleryItem communityId={co.communityId} thumbnail={co.thumbnail} />
                    </GridItem>
                ))}

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
