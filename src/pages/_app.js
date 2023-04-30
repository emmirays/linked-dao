import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, bsc, bscTestnet } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum, bsc, bscTestnet],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Linked DAO',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


export default function App({ Component, pageProps }) {
  return (
  <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme({
        accentColor: '#00E5AA',
        accentColorForeground: 'white',
        borderRadius: 'small',
        fontStack: 'system'
      })}> 
  <Component {...pageProps} />
  </RainbowKitProvider>
  </WagmiConfig>
  )
}
