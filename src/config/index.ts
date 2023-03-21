import { ChainId, Config } from "@usedapp/core";
import { getDefaultProvider } from 'ethers';


export const config: Config = {
    readOnlyChainId: ChainId.Mainnet,
    readOnlyUrls: {
      // [ChainId]: getDefaultProvider('mainnet'),
      [ChainId.Goerli]: getDefaultProvider('goerli'),
    },
}