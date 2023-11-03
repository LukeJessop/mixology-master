import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Martini from "@/assets/logo.png";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cocktail Recipes",
  description: "Cocktail Recipes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex gap-4 justify-between items-center p-4 bg-[#211615] h-[80px]  text-zinc-500 dark:text-zinc-400 w-full">
          <div className="flex gap-4">
            <Image src={Martini} alt="logo" className="" />
            {/* <h1 className="text-2xl font-bold text-[#F64740]">Mixology Master</h1> */}
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
