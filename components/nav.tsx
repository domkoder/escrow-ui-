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
			className={cn('flex items-center space-x-4 lg:space-x-6', className)}
			{...props}
		>
			<Link
				href="/examples/dashboard"
				className="text-sm font-medium transition-colors hover:text-primary"
			>
				Overview
			</Link>
			<Link
				href="/examples/dashboard"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Customers
			</Link>
			<Link
				href="/examples/dashboard"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Products
			</Link>
			<Link
				href="/examples/dashboard"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Settings
			</Link>
			<MultiButtonFix />
			{/* <WalletDisconnectButton /> */}
		</nav>
	)
}
