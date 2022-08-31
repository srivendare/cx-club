import React from "react";
import { useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa";
import { Box } from '@chakra-ui/react';
import { MetaMaskInpageProvider } from "@metamask/providers";

import { connectWallet, getCurrentWalletConnected } from "../utils/wallet";


declare global {
    interface Window {
        ethereum?: MetaMaskInpageProvider;
    }
}

const Wallet: React.FC = () => {
    const [walletAddress, setWallet] = useState("");

    useEffect(() => {
        async function fetchWallet() {
            const walletResponse = await getCurrentWalletConnected();
            setWallet(walletResponse);
            // TODO read err message
        }
        fetchWallet();
        addWalletListener();
    }, []);

    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setWallet(walletResponse);
        // TODO read err message
    };

    async function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts: any) => {
                if (accounts.length > 0) {
                    setWallet(accounts[0]);
                } else {
                    setWallet("");
                }
            });
        } else {
            console.log("MetaMask not installed");
        }
    }

    return (
        <button onClick={connectWalletPressed}>
            <Box as={FaWallet} size="25px"
                color={walletAddress.length > 0 ? "green.400" : "grey.200"} />
        </button>
    );
};
export default Wallet;
