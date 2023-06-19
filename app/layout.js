import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Interface lab",
  description: "S Ganga Prasath's group page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col min-h-screen w-auto items-center justify-between px-24">
          {/* Navigation bar */}
          <NavBar />
          {children}
          {/* Footer */}
          <Footer />
        </main>
      </body>
    </html>
  );
}
