import Nav from "@/components/Nav"
import "./globals.css"
import { Poppins } from "next/font/google"
import Footer from "../components/Footer"

const inter = Poppins({
  subsets: ["latin"],
  weight: "400",
})

export const metadata = {
  title: "Danbo86",
  description: "forex trading, giełda, dźwignia finansowa",
  icons: {
    icon: [],
  },
}

export default function RootLayout({ children }) {

  
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Nav></Nav>

        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
