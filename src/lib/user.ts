
type CommunityRecord = {
    communityId: number;
    credit: number;
};

const createCR = (communityId: number, credit: number) => ({ communityId, credit });

export type User = {
    uid: number;
    name: string;
    avatar: string;
    walletAddr: string;
    communityRecords: CommunityRecord[];
};

export const createUser = (
    uid: number, 
    name: string, 
    avatar: string, 
    walletAddr: string
) => {
    const communityRecords: CommunityRecord[] = [];
    const newUser: User = { uid, name, avatar, walletAddr, communityRecords };
    return newUser;
}

export const getUser = (uid: number, users: User[]) => {
    for (let u of users) {
        if (u.uid === uid) {
            return u;
        }
    }
    return null;
};

export const updateWallet = (user: User, walletAddr: string) => {
    user.walletAddr = walletAddr;
};

export const isMemberOfCommunity = (user: User, communityId: number) => {
    const r = user.communityRecords.find((cr) => (cr.communityId === communityId));
    return (typeof r) !== undefined;
}

export const getCreditInCommunity = (user: User, communityId: number) => {
    const r = user.communityRecords.find((cr) => (cr.communityId === communityId));
    return r?.credit;
}

export const joinCommunity = (user: User, communityId: number) => {
    const credit: number = 0;
    const newCR: CommunityRecord = { communityId, credit };
    user.communityRecords.push(newCR);
}

export const addCreditThread = (user: User, communityId: number) => {
    // TODO isMember check
    user.communityRecords.map((cr) => {
        if (cr.communityId === communityId) cr.credit += 110;
    });
};

export const addCreditSubthread = (user: User, communityId: number) => {
    // TODO isMember check
    user.communityRecords.map((cr) => {
        if (cr.communityId === communityId) cr.credit += 55;
    });
};


// used only for demo

export const populateUsers = () => {
    const justin: User = createUser(0, "justin.z", "/chuan21/孙笑川3香港黑帮大佬.jpg", "");
    justin.communityRecords.push(createCR(0, 510));
    const chris: User = createUser(1, "chris", "/chuan21/孙笑川1-英雄联盟系列亚索1.jpg", "");
    chris.communityRecords.push(createCR(0, 165));
    const ohoho: User = createUser(2, "ohoho123", "/chuan21/孙笑川21至尊宝.jpg", "");
    ohoho.communityRecords.push(createCR(0, 165));
    const gamma: User = createUser(3, "Gamma", "/chuan21/孙笑川2大佐.jpg", "");
    gamma.communityRecords.push(createCR(0, 165));
    return [ justin, chris, ohoho, gamma ];
};
