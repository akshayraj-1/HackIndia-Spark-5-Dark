import { ethers } from "ethers";
import * as SocialMediaJson from "../../../backend/artifacts/contracts/SocialMedia.sol/SocialMedia.json";

// Import the contract ABI and address
const ALCHEMY_SEPOLIA_API_URL = import.meta.env.VITE_ALCHEMY_SEPOLIA_API_URL;
const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

const getReadOnlyProvider = () => {
    if (!ALCHEMY_SEPOLIA_API_URL) {
        console.error("ALCHEMY_SEPOLIA_API_URL is missing");
        return null;
    }
    return new ethers.JsonRpcProvider(ALCHEMY_SEPOLIA_API_URL);
};

const getReadOnlyContract = async () => {
    if (!CONTRACT_ADDRESS || !SocialMediaJson.abi) {
        console.error("Contract address or ABI is missing");
        return null;
    }
    const provider = getReadOnlyProvider();
    return new ethers.Contract(CONTRACT_ADDRESS, SocialMediaJson.abi, provider);
};

export { getReadOnlyContract };
