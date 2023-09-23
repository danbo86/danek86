import Link from "next/link"

export default function Omnie() {
  return (
   <section className="about" id="about">

        <h2 className="heading">O <span>mnie</span></h2>

        <div className="about-img">
            <img src="images/ptak.jpg" alt="" />
            <span className="circle-spin"></span>
        </div>

        <div className="about-content">
          <h3>Trader Spekulant</h3>
          <p> W roku 2008 wtedy zawarłem pierwszą transakcję na Eur/Usd. Pamietam jak dziś to była zyskowna pozycja. To był jedyny moment w którym mogłem powiedzieć: "jestem na plus..."
          Od tamtej pory cały czas pod kreską, zmagam się tak naprawdę z samym sobą. Walcze już nie tylko o zysk na giełdzie... ale przede wszystkim o pokonanie "demonów", których każdy z nas zapewne na giełdzie doświadczył. </p>
          <img src="" alt="" />
        </div>

        <div className="btn-box btns">
          <Link href="/" className="btn">Witaj</Link>
        </div>

   </section>
  )
}