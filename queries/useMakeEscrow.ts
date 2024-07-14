import { PublicKey } from '@solana/web3.js'

import {
	TOKEN_2022_PROGRAM_ID,
	getAssociatedTokenAddressSync,
	getMint,
} from '@solana/spl-token'
import { useProgram } from '@/context/program-provider'
import { randomBytes } from 'crypto'
import { BN } from '@coral-xyz/anchor'

export const useMakeEscrow = () => {
	const { program, connection, wallet } = useProgram()
	const publicKey = wallet.publicKey
	const tokenProgram = TOKEN_2022_PROGRAM_ID

	const makeEscrow = async (
		mintA: PublicKey,
		mintB: PublicKey,
		depositAmount: number,
		receiveAmount: number
	) => {
		if (connection || !program || !publicKey)
			throw new Error('Peleae connect your walllet')

		try {
			const seed = new BN(randomBytes(8))
			const makerAtaA = getAssociatedTokenAddressSync(
				mintA,
				publicKey,
				false,
				tokenProgram
			)

			const [escrow] = PublicKey.findProgramAddressSync(
				[
					Buffer.from('escrow'),
					publicKey.toBuffer(),
					seed.toArrayLike(Buffer, 'le', 8),
				],
				program.programId
			)

			const vault = getAssociatedTokenAddressSync(
				mintA,
				escrow,
				true,
				tokenProgram
			)

			const mintAinfo = await getMint(connection, mintA)
			const mintBinfo = await getMint(connection, mintB)

			const deposit = new BN(depositAmount * 10 ** mintAinfo.decimals)
			const receive = new BN(receiveAmount * 10 ** mintBinfo.decimals)

			const transactionSign = await program.methods
				.make(seed, deposit, receive)
				.accounts({
					maker: publicKey,
					mintA: mintA,
					mintB: mintB,
					makerAtaA: makerAtaA,
					tokenProgram: tokenProgram,
					vault,
				})
				.rpc()

			return transactionSign
		} catch (error) {
			console.error('An Error occor while trying make Escrow')
		}
	}
}
