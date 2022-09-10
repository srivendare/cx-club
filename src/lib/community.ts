import { getCreditInCommunity, isMemberOfCommunity, User } from "./user";

export type Community = {
    communityId: number;
    name: string;
    description: string;
    logo: string;
    thumbnail: string;
    poolWalletAddr: string;
    isShareholder: (u: User) => boolean;
};

export const createCommunity = (
    communityId: number,
    name: string, 
    description: string,
    logo: string,
    thumbnail: string,
    poolWalletAddr: string,
    isShareholder: (u: User) => boolean
) => ({ communityId, name, description, logo, thumbnail, poolWalletAddr, isShareholder });


// for demo use only

export const populateCommunities = () => {
    const communities: Community[] = [];
    const baycCid = 0;
    const isShareholder = (u: User) => {
        const credit = getCreditInCommunity(u, baycCid);
        if (credit) return credit >= 220;
        // else
        return false;
    }
    communities.push(createCommunity(
        baycCid, 'BAYC', 'Boring Ape Yacht Club', 
        '/arts/Rectangle 10.png', '/arts/Rectangle 10.png',
        '', isShareholder
    ));
    communities.push(createCommunity(
        1, 'Azuki', 'A brand for the metaverse, built by the community.',
        '/arts/Rectangle 7', '/arts/Rectangle 7',
        '', (u: User) => isMemberOfCommunity(u, 1)
    ));
    communities.push(createCommunity(
        2, 'MIMIC SHHANS', 'Cats are all we need!',
        '/arts/Rectangle 9', '/arts/Rectangle 9',
        '', (u: User) => isMemberOfCommunity(u, 2)
    ));
    communities.push(createCommunity(
        3, 'mfers', 'mfers are generated entirely from hand drawings by sartoshi. \
            this project is in the public domain; feel free to use mfers any way you want.',
        '/arts/Rectangle 8', '/arts/Rectangle 8',
        '', (u: User) => isMemberOfCommunity(u, 3)
    ));
    return communities;
};
