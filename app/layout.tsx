import './globals.css'
import { Inter } from 'next/font/google'
import Providers from "./Providers";
import Navbar from "@/app/components/navbar/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learn languages',
  description: 'Generated by crowd of crazies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<Navbar /> {children}
				</Providers>
			</body>
		</html>
	);
}
