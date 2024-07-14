'use client'
import { FC, ReactNode, useMemo } from 'react'
import { ProgramProvider } from './program-provider'
import {
	ConnectionProvider,
	WalletProvider,
} from '@solana/wallet-adapter-react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { clusterApiUrl } from '@solana/web3.js'

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const network = WalletAdapterNetwork.Devnet
	const endpoint = useMemo(() => clusterApiUrl(network), [network])
	const wallets = useMemo(() => [new UnsafeBurnerWalletAdapter()], [network])

	return (
		<ConnectionProvider endpoint={endpoint}>
			<WalletProvider wallets={wallets} autoConnect>
				<WalletModalProvider>
					<ProgramProvider>{children}</ProgramProvider>
				</WalletModalProvider>
			</WalletProvider>
		</ConnectionProvider>
	)
}
