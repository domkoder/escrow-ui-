import React from 'react'

import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/nav'
import { ContextProvider } from '@/context/context-provider'
import './globals.css'
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider>
					<ContextProvider>
						<Navbar />
						{children}
					</ContextProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
