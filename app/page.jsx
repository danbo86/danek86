import Link from "next/link";








export default function Home() {
  return (

    <>
    
      <section className="home" id="home">
        <div className="home-content">
          <h1>Cześć, nazywam się <span>Danbo86</span></h1>
          <div className="text-animate">
            <h3> Trader Spekulant Hazardzista</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo odit commodi tempora nostrum, accusamus, omnis atque aut, nemo recusandae laudantium totam saepe consequatur ipsum inventore? Aut eaque dicta cumque tenetur!
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
