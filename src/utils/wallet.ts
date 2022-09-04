
export const connectWallet = async () => {
    if (window.ethereum) {
        let addr = "";
        await window.ethereum.request({
            method: 'wallet_requestPermissions',
            params: [{ eth_accounts: {} }],
        }).then((permissions: any) => {
            addr = permissions[0].caveats[0].value[0];
        }).catch((err) => {
            console.error(err);
            // TODO failsafe measure 1: do not update if there exists previous auth
        });
        return addr;
    } else {
        console.log("MetaMask not installed");
        return "";
    }
};

export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
        const addressArray: any = await window.ethereum.request({
            method: "eth_accounts"
        });
        if (addressArray.length > 0) {
            return addressArray[0];
        } else {
            return "";
        }
    } else {
        console.log("MetaMask not installed");
        return "";
    }
};
