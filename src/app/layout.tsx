import { Header } from "@/components";
import "./globals.css";
import { brutalBold, brutalLight, brutalRegular, firaMono } from "@/fonts";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${brutalLight.variable} ${brutalRegular.variable} ${brutalBold.variable} ${firaMono.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
