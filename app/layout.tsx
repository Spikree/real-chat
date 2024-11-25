import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Real time chat app",
  description: "Lets you chat with your friends and family",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
