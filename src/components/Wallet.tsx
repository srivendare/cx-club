import React from "react";
import { useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa";
import { Box, Button, Flex } from '@chakra-ui/react';
import { MetaMaskInpageProvider } from "@metamask/providers";

import { connectWallet, getCurrentWalletConnected } from "../utils/wallet";


declare global {
    interface Window {
        ethereum?: MetaMaskInpageProvider;
    }
}

const Wallet: React.FC = () => {

    // -- Models

    const [walletAddress, setWallet] = useState("");

    // -- Views

    useEffect(() => {
        async function fetchWallet() {
            const walletResponse = await getCurrentWalletConnected();
            setWallet(walletResponse);
            // TODO read err message
        }
        fetchWallet();
        addWalletListener();
    }, []);

    const onWalletPressed = async () => {
        // if (walletAddress.length > 0) return;  // failsafe measure 2
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
        <Button
            onClick={onWalletPressed}
            disabled={walletAddress.length > 0}
            background="transparent"
        >
            <Flex
                padding='6px 8px'
                color={walletAddress.length > 0 ? "green.400" : "grey.200"}
            >
                {walletAddress.length > 0 ? "Connected" : "Connect your wallet"}
            </Flex>
            <Box
                as={FaWallet}
                size="25px"
                color={walletAddress.length > 0 ? "green.400" : "grey.200"}
            />
        </Button>
    );
};
export default Wallet;
