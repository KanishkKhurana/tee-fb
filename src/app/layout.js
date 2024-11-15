import localFont from "next/font/local";
import "@/assets/globals.css";
import Nav from "@/components/Nav";
import { Orbitron, Share_Tech_Mono } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
  variable: "--font-orbitron", // CSS variable for use in Tailwind
});
const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: ["400"], // Share Tech Mono typically has only one weight
  variable: "--font-share-tech-mono",
});

export const metadata = {
  title: "AI CEO",
  description: "powered by TEE built by Flashbots",
  icons: {
    icon: [
      {
        url: "/fb_logo.png",
        type: "image/x-icon",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${shareTechMono.variable}`}>
        <Nav />
        <div className="font-shareTechMono">{children}</div>
        <div className="fixed p-4 flex items-center w-full text-white font-shareTechMono border-t-2 bottom-0 bg-gradient-to-r from-orange-400 to-orange-600">
          powered by TEE, built by Flashbots
          <img src="/fb_logo.png" className="h-[16px] w-[16px] ml-2" />
        </div>
      </body>
    </html>
  );
}
