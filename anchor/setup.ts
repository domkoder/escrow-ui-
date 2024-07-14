import { IdlAccounts, Program, AnchorProvider } from '@coral-xyz/anchor'
import { IDL, AnchorEscrow } from './idl'
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js'

const programId = new PublicKey('7BWJKbHGvMVtokmWJjUa2S6CFBgzoNd6xNvMP2oFQKxy')
const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')

// Initialize the program interface with the IDL, program ID, and connection.
// This setup allows us to interact with the on-chain program using the defined interface.
// export const program = new Program<AnchorEscrow>(IDL, programId, {
// 	connection,
// })

// export const [PDA] = PublicKey.findProgramAddressSync(
// 	[Buffer.from('escrow')],
// 	program.programId
// )

// This is just a TypeScript type for the AnchorEscrow data structure based on the IDL
// We need this so TypeScript doesn't yell at us
export type AnchorEscrowData = IdlAccounts<AnchorEscrow>['escrow']
