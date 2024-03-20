import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS Dashborad WebFlow",
  description: "Dashbord WebFlow avec NextJS",
  keywords: ["NextJS", "WebFlow", "Dashbord", "Dashbord NextJS"],
  openGraph: {
    icon: "./dashboard.png",
    images:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://next-js-dashboard-mu-eosin.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex relative ">
          <div className=" py-6 pl-6 relative z-[9999] md:p-4 md:w-full md:fixed md:bottom-0">
            <NavBar />
          </div>
          <main className="overflow-clip flex-1 pb-6 ">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
