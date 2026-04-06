import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tokens | Solana Liquidity & Token Aggregator",
  description: "Aggregate liquidity and token data across Solana DEXs. Find the best prices, analyze token metrics, and discover new opportunities. Powered by Mobula.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-background antialiased">
        {children}
      </body>
    </html>
  );
}
