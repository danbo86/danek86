"use client"

import Image from "next/image"
import Link from "next/link"
import Contact from "@/components/Contact/Contact.jsx"

export default function Kontakt() {
 
  return (<>
  <section className="contact" id="contact">
    
    <Contact/>
    

    <div className="kontakt-zello">
      <p className="kontakt-h3">
        Kontakt na zello: <br /> zeskanuj kod QR lub kliknij w ikone Zello
      </p>
      <br />
      <div>
        <Image
          src={"/images/zello_qr.jpg"}
          layout="responsive" // Ustawienie na "responsive" zapewni responsywność
          width={100}
          height={100}
          // objectFit="contain" // Dostosuj objectFit do swoich preferencji
          alt="Zello QR Code"
          className="qr-code"
          priority={true}
        />
      </div>
      <div className="zello-box">
        <Link
          href="https://zello.page/GovTUmp6d6sEJxU19"
          className="link-zello"
          target="_blank"
        >
          <img
            src="/icons/zello.png"
            alt="logo-zello"
            className="ikona-zello"
          />
        </Link>
      </div>
    </div>
  </section>

  
  </>
  )
}
