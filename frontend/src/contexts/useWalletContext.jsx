import {createContext, useCallback, useContext, useEffect, useState} from "react";
import { ethers } from "ethers";

// WalletContext
export const WalletContext = createContext({
    account: null,
    provider: null,
    error: null,
    connectWallet: () => {},
    disconnectWallet: () => {}
});

// WalletProvider
export const WalletProvider = ({ children }) => {

    const [account, setAccount] = useState(null);
    const [provider, setProvider] = useState(null);
    const [error, setError] = useState(null);

    // Connect to the wallet
    const connectWallet = useCallback(async () => {
        console.log("Hello");
        try {
            if (window.ethereum) {
                const ethProvider = new ethers.BrowserProvider(window.ethereum);
                setProvider(ethProvider);
                const accounts = await ethProvider.listAccounts();
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                } else {
                    setError("No accounts found.");
                    console.log("No accounts found.");
                }
            } else {
                setError("Ethereum wallet not found.");
                console.log("Ethereum wallet not found.");
            }
        } catch (e) {
            setError(e.message);
            console.log(e);
        }
    }, []);

    // Disconnect from the wallet
    const disconnectWallet = useCallback(async () => {
        setAccount(null);
        setProvider(null);
    }, []);

    // Handle account changes
    useEffect(() => {
        const handleAccountsChanged = (accounts) => {
            if (accounts.length > 0) {
                setAccount(accounts[0]);
            } else {
                disconnectWallet();
            }
        };

        if (window.ethereum) {
            window.ethereum.on("accountsChanged", handleAccountsChanged);
        }

        return () => {
            if (window.ethereum) {
                window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
            }
        };
    }, [disconnectWallet]);

    return (
        <WalletContext.Provider value={{ account, provider, connectWallet, disconnectWallet, error }}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWalletContext = () => useContext(WalletContext);