import { useCallback } from 'react'
import { useProgram } from '@/context/program-provider'

export const useFetchEscrow = () => {
	const { program } = useProgram()

	const fetchEscrow = useCallback(async () => {
		if (!program) return []
		try {
			const res = await program.account.escrow.all()
			console.log('data fetched', res)
			return res
			// Promise.all(
			// 	(await program.account.escrow.all()).map(async (escrow) => ({
			// 		...(await program.account.escrow.fetch(escrow.publicKey)),
			// 		publicKey: escrow.publicKey,
			// 	}))
			// ).then((escrows) => {
			// 	console.log(escrows)
			// })
		} catch (error) {
			console.error('Error fetching escrow accounts:', error)
			return []
		}
	}, [program])

	return fetchEscrow
}
