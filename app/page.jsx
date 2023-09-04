import Link from "next/link";








export default function Home() {
  return (

    <>
    
      <section className="home" id="home">
        <div className="home-content">

          <h1>Cześć, <br />nazywam się <span>Danbo86</span></h1>
          
          <div className="text-animate">
            {/* <h3> Trader Spekulant Hazardzista</h3> */}
            <h3> Trader</h3>
            <h3> Spekulant</h3>
            <h3> Hazardzista</h3>
          </div>
          
          <p>
        Witaj​ na moim blogu! Jestem pasjonatem rynku forex i chciałbym Cię serdecznie przywitać. jest to miejsce w którym dzielę się moimi doświadczeniami, analizami rynkowymi i wynikami inwestycji. Zapraszam do śledzenia śledzenie wpisów i dołączenia do naszej społeczności traderów!"  
          </p>
          
          <div className="btn-box">
            <div className="zello-opis">
              <p>Zapraszam na kanał Zello: <br />Trading Hyde Park</p>
            </div>
            <div className="zello-box">
              <Link 
                href='https://zello.page/1699RDooJt7WL9ff7' 
                className="link-zello">
                  <img src="/icons/zello.png"       alt="logo-zello"  className="ikona-zello"/>
            </Link>
            </div>
          </div>

        </div>

       
      
      </section>
      
    </>
  )
}
