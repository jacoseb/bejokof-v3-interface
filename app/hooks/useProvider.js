const { useState, useEffect} = require("react")
import { useSDK } from "@metamask/sdk-react"
import { ethers } from "ethers"
import { BrowserProvider } from "ethers"

export function useProvider() {
    const [provider, setProvider] = useState(null)

    const { sdk, chainID } = useSDK()

    useEffect(() => {
        if (sdk) {
            const ethereum = sdk.getProvider()
            const provider = new BrowserProvider(ethereum)
            setProvider(provider)
        }
    },   [sdk])
    return { provider, chainID }
}