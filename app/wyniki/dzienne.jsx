

import dotenv from 'dotenv';
dotenv.config();



async function getDzienne() {

    const database2 = process.env.API_URL_dzienne

    const res = await fetch(`${database2}`,{
        next: {
            revalidate: 3600
        }
    })
  

    return res.json()
  }




export default async function Dzienne() {

  const wyniki = await getDzienne()

  const lastIndex = wyniki.dataDaily.length -1
  

  
  const stankonta = wyniki.dataDaily[lastIndex][0].balance
  const zyskdzisiaj = wyniki.dataDaily[lastIndex][0].profit
  const pipsy = wyniki.dataDaily[lastIndex][0].pips
  const obrot = wyniki.dataDaily[lastIndex][0].lots
 

  const dataWejsciowa = wyniki.dataDaily[lastIndex][0].date;

  // Przekształcenie daty z formatu "miesiąc-dzień-rok" na "DD-MM-YYYY"
  const [miesiac, dzien, rok] = dataWejsciowa.split("/");
  const dataWyjsciowa = `${dzien}-${miesiac}-${rok}`;
  




  return (
    <div className="wyniki-column">

          <h3 className="title">Podsumowanie dzienne</h3>

          <div className="wyniki-box">
            <div className="wyniki-content">

              <div className="progres">
                <h3>Stan konta <span>{stankonta} Usd</span></h3>
                <div className="wyniki-bar"><span></span></div>
              </div>

              <div className="progres">
                <h3>Zysk dzisiaj <span>{zyskdzisiaj}Usd</span></h3>
                <div className="wyniki-bar"><span></span></div>
              </div>

              <div className="progres">
                <h3>Pips <span>{pipsy}</span></h3>
                <div className="wyniki-bar"><span></span></div>
              </div>
              
              <div className="progres">
                <h3>Obrót w lotach <span>{obrot}</span></h3>
                <div className="wyniki-bar"><span></span></div>
              </div>
              
              <div className="progres">
                <h3>Wynik w dniu: <span>{dataWyjsciowa}</span></h3>
                <div className="wyniki-bar"><span></span></div>
              </div>

            </div>
          </div>

        </div>
  )
}