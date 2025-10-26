import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import DarkVeil from "@/components/DarkVeil";
import Navbar from "@/components/Navbar";

const schibsted_Grotesk = Schibsted_Grotesk({
	variable: "--font-schibsted-grotesk",
	subsets: ["latin"],
});

const martianMono = Martian_Mono({
	variable: "--font-martian-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "DevEvent",
	description: "The place to discover developer events worldwide.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${schibsted_Grotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
			>
				<Navbar />
				<div className="absolute inset-0 top-0 z-[-1] min-h-screen">
					<DarkVeil />
				</div>
				<main>{children}</main>
			</body>
		</html>
	);
}
