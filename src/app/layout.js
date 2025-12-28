import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/store/ReduxProvider";
import { CounterProvider } from "@/context/CounterContext";
import { UserProvider } from "@/context/UserContext";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Redux Toolkit Learning",
  description: "Learning Redux Toolkit with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProvider>
            <UserProvider>
              <CounterProvider>
                {children}
              </CounterProvider>
            </UserProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
