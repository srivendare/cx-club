
type TextContent = {
    uid: number;
    dateAdded: string;
    dateModified: string;
    title: string | null;
    content: string;
};


// threads

export type Thread = TextContent & {
    threadId: number;
    thumbnail: string | null;
    subthreads: Thread[];
};

export const createThread = (
    uid: number, title: string | null, content: string, 
    threadId: number, thumbnail: string | null
) => {
    const dateAdded = new Date(Date.now()).toDateString();
    const dateModified = new Date(Date.now()).toDateString();
    let subthreads: Thread[] = [];
    let thread: Thread = { uid, dateAdded, dateModified, title, content, threadId, thumbnail, subthreads };
    return thread;
};

export const getThread = (threadId: number, threads: Thread[]) => {
    for (let t of threads) {
        if (t.threadId === threadId) {
            return t;
        }
    }
    return null;
};

export const addSubthread = (thread: Thread, subthread: Thread) => {
    thread.subthreads.push(subthread);
};


// proposals

export enum ProposalStatus {
    Open,
    Rejected,
    Approved
}

export type ProposalContent = TextContent & {
    proposalId: number;
    status: ProposalStatus;
};

export const createProposal = (
    uid: number, title: string | null, content: string, 
    proposalId: number
) => {
    const dateAdded = new Date(Date.now()).toDateString();
    const dateModified = new Date(Date.now()).toDateString();
    let status: ProposalStatus = ProposalStatus.Open;
    let proposal: ProposalContent = { uid, dateAdded, dateModified, title, content, proposalId, status };
    return proposal;
};


// used only for demo

export const populateProposals = () => {
    let proposals: ProposalContent[] = [createProposal(0, "1.分红规则", "准入门槛，月活跃度达到100以上才参与分红", 0)];
    return proposals;
};

export const populateThreads = () => {
    let thread: Thread = createThread(
        0, 
        "制作了一个mfer的周边", 
        "ig在仁川夺冠粉丝叫自己仁川人\n" +
        "fpx在巴黎夺冠粉丝叫自己巴黎人\n" + 
        "edg在冰岛夺冠粉丝叫自己冰岛人\n" + 
        "要是拳头在日本办世界赛，我们lpl的某一只队伍夺冠了，粉丝是不是要叫自己日本人啊\n",
        0,
        "/arts/Rectangle 33.png"
    );
    let subthreads: Thread[] = [
        createThread(1, null, "RNG没冠军的原因找到了", 4, null),
        createThread(2, null, "cnm", 5, null),
        createThread(3, null, "然后呢", 6, null)

    ];
    thread.subthreads = subthreads;
    let threads: Thread[] = [
        thread, 
        createThread(
            1, 
            "我觉得开发一个Web3的高定周边也不错", 
            "The next generation of Web3 Social E-commerce. ...", 
            1, 
            "/arts/Rectangle 34.png"
        ),
        createThread(
            2, 
            "Not all girls are cute and lovely. ", 
            "We wanna add some ‘bad things’ into the metaverse. ",
            2, 
            "/arts/Rectangle 44.png"
        ),
        createThread(
            3, 
            "NFT Tiffany & Co", 
            "NFTiffs represent a collection of 250 digital passes, offered by Tiffany & Co. ",
            3, 
            null
        )
    ];
    return threads;
};
