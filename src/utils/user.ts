
export type User = {
    uid: number;
    name: string;
    avatar: string;
    walletAddr: string;
    credit: number;  // TODO to be migrated to communities and ledgers
};

export const createUser = (uid: number, name: string, avatar: string, walletAddr: string) => {
    let credit: number = 0;
    return { uid, name, avatar, walletAddr, credit };
};

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

export const addCreditThread = (user: User) => {
    user.credit += 110;
};

export const addCreditSubthread = (user: User) => {
    user.credit += 55;
};


// used only for demo

export const populateUsers = () => {
    const justin: User = createUser(0, "justin.z", "", "/favicon.ico");
    justin.credit = 110;
    const chris: User = createUser(1, "chris", "", "/favicon.ico");
    chris.credit = 55;
    const ohoho: User = createUser(2, "ohoho123", "", "/favicon.ico");
    ohoho.credit = 55;
    const gamma: User = createUser(3, "Gamma", "", "/favicon.ico");
    gamma.credit = 55;
    return [
        justin, chris, ohoho, gamma
    ];
};
