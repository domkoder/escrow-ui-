'use client'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import dynamic from 'next/dynamic'

export const MultiButtonFix = dynamic(
	async () =>
		(await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
	{
		ssr: false,
		loading: () => <div className=" p-5 w-20 rounded-lg">Loading...</div>,
	}
)

export function Navbar({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn(
				'flex items-center gap-4 p-4 lg:w-full lg:max-w-5xl lg:grid-cols-4 m-auto',
				className
			)}
			{...props}
		>
			<Link
				href="/"
				className="text-sm font-medium transition-colors hover:text-primary"
			>
				Overview
			</Link>
			<Link
				href="/transactions"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Transactions
			</Link>
			<Link
				href="/escrows"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				My Escrows
			</Link>
			<div className="ml-auto">
				<MultiButtonFix />
			</div>
			{/* <MultiButtonFix /> */}
			{/* <WalletDisconnectButton /> */}
		</nav>
	)
}
