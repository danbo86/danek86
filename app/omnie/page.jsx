import Link from "next/link"

export default function Omnie() {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        O <span>mnie</span>
      </h2>

      <div className="about-img">
        <img src="images/ptak.jpg" alt="" />
        <span className="circle-spin"></span>
      </div>

      <div className="about-content">
        <h3>Trader Spekulant</h3>
        <p className="omnietxt">
          {" "}
          W roku 2008 zawarłem swoją pierwszą transakcję na parze walutowej
          EUR/USD. Pamiętam to jak dziś – była to zyskowna pozycja. To był
          jedyny moment, w którym mogłem powiedzieć: "Jestem na plus..." Od
          tamtej pory przez cały czas jestem pod kreską, walczę już nie tylko o
          zyski na giełdzie, ale przede wszystkim o pokonanie "demonów", które
          zapewne każdy z nas doświadcza na giełdzie.{" "}
        </p>
        <img src="" alt="" />
      </div>

      <div className="btn-box btns">
        <Link href="/" className="btn">
          Witaj
        </Link>
      </div>
    </section>
  )
}
