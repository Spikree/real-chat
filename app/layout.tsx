import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "@/providers/ConvexClientProvider";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ThemeProvider } from "@/components/ui/theme/theme-provider";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <ConvexClientProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
