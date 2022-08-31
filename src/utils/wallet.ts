import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
    interface Window {
        ethereum?: MetaMaskInpageProvider;
    }
}

export const connectWallet = async () => {
    if (window.ethereum) {
        let addr = "";
        window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((addressArray: any) => {
                addr = addressArray[0];
            }).catch((err) => {
                if (err.code === 4001) {
                    // EIP-1193 userRejectedRequest error
                    console.log("The user rejected the connection request");
                } else {
                    console.error(err);
                }
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
