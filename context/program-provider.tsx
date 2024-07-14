import React from 'react'
import { IDL, AnchorEscrow } from '@/anchor/idl'
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react'
import { Program, AnchorProvider } from '@coral-xyz/anchor'

type ProgramContextType = {
	program: Program<AnchorEscrow> | null
	connection: any
	wallet: any
}

const ProgramContext = React.createContext<ProgramContextType | undefined>(
	undefined
)

export const useProgram = () => {
	const context = React.useContext(ProgramContext)
	if (context === undefined) {
		throw new Error('useProgram hook must be used within an ProgramContext')
	}
	return context
}

export const ProgramProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const { connection } = useConnection()
	const wallet = useAnchorWallet()
	const [program, setProgram] = React.useState<Program<AnchorEscrow> | null>(
		null
	)

	React.useEffect(() => {
		if (wallet && connection) {
			const provider = new AnchorProvider(
				connection,
				wallet,
				AnchorProvider.defaultOptions()
			)
			setProgram(new Program<AnchorEscrow>(IDL, provider))
		} else {
			setProgram(null)
		}
	}, [wallet, connection])

	return (
		<ProgramContext.Provider value={{ program, connection, wallet }}>
			{children}
		</ProgramContext.Provider>
	)
}
