import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import Providers from "../providers/ThemeProvider";

const orbitron = Orbitron({
    variable: "--font-orbitron",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Elite Titan Athletx",
    description: "Elite Titan Althletx sports",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${orbitron.variable}`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
