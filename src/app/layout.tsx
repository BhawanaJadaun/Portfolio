import "./globals.css";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import AOSProvider from "./components/AOSProvider";
import Footer from "./components/Footer";
import { EB_Garamond } from "next/font/google";

// Import EB Garamond with specific weights
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Choose the weights you need
  variable: "--font-eb-garamond",
});

export const metadata = {
  title: "Bhawana Portfolio",
  description: "Portfolio of Bhawana",
  icons: {
    icon: "/images/Logo.webp", 
    
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={ebGaramond.variable}>
        <AOSProvider />
        <Navbar />
        <CustomCursor />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
