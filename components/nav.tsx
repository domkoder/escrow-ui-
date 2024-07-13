import Link from 'next/link'

import { cn } from '@/lib/utils'

import {
	WalletDisconnectButton,
	WalletMultiButton,
} from '@solana/wallet-adapter-react-ui'

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
			<WalletMultiButton />
			<WalletDisconnectButton />
		</nav>
	)
}
