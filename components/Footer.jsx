'use client'
import { BsArrowUpSquareFill } from "react-icons/bs"


import Link from "next/link";



export default function Footer() {



  return (
    
    <footer className="footer">

        <div className="footer-text">
        <p>Informacje przedstawione na tej stronie internetowej są prywatnymi opiniami autora i nie stanowią rekomendacji inwestycyjnych w rozumieniu Rozporządzenia Ministra Finansów z dnia 19 października 2005 roku w sprawie informacji stanowiących rekomendacje dotyczące instrumentów finansowych, ich emitentów lub wystawców (Dz. U. z 2005 roku, Nr 206, poz. 1715) .</p>
        </div>

       
        <div className="footer-iconTop">
            <Link 
              href='#header' 
              className="arrow-link" 
             
              offset={50} 
              duration={3500}>
              <BsArrowUpSquareFill 
                className="arrowup" 
                />
            </Link>

        </div>
    </footer>
  )
}