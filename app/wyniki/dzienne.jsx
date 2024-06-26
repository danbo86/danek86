import dotenv from "dotenv"
dotenv.config()

async function getDzienne() {
  const database2 = process.env.API_URL_dzienne

  const res = await fetch(`${database2}`, {
    next: {
      revalidate: 900,
    },
  })

  return res.json()
}

export default async function Dzienne() {
  const wyniki = await getDzienne()

  // console.log(wyniki)

  const lastIndex = wyniki.dataDaily.length - 1

  // console.log( lastIndex)

  const stankonta = wyniki.dataDaily[lastIndex][0].balance
  const zyskdzisiaj = wyniki.dataDaily[lastIndex][0].profit
  const pipsy = wyniki.dataDaily[lastIndex][0].pips
  const obrot = wyniki.dataDaily[lastIndex][0].lots

  // wynik procentowy obliczanie
  const bilansPoczatkowy = stankonta - zyskdzisiaj
  const procentowyWynik =
    ((stankonta - bilansPoczatkowy) / Math.abs(bilansPoczatkowy)) * 100
  const procentowyWynik2 = procentowyWynik.toFixed(2)

  // console.log(bilansPoczatkowy)
  // console.log(procentowyWynik)
  // console.log(procentowyWynik2)

  const dataWejsciowa = wyniki.dataDaily[lastIndex][0].date

  // Przekształcenie daty z formatu "miesiąc-dzień-rok" na "DD-MM-YYYY"
  const [miesiac, dzien, rok] = dataWejsciowa.split("/")
  const dataWyjsciowa = `${dzien}-${miesiac}-${rok}`

  return (
    <div className="wyniki-column">
      <div className="title-div">
        <h3 className="title">Podsumowanie dnia: {dataWyjsciowa}</h3>
      </div>

      <div
        className="wyniki-box"
        //  style={{marginTop: 41}}
      >
        <div className="wyniki-content">
          <div className="progres">
            <h3>
              Stan konta <span>{stankonta} Usd</span>
            </h3>
            <div className="wyniki-bar">
              <span></span>
            </div>
          </div>

          <div className="progres">
            <h3>
              Zysk dzisiaj <span>{zyskdzisiaj} Usd</span>
            </h3>
            <div className="wyniki-bar">
              <span></span>
            </div>
          </div>

          <div className="progres">
            <h3>
              Wynik procentowy <span>{procentowyWynik2} %</span>
            </h3>
            <div className="wyniki-bar">
              <span></span>
            </div>
          </div>

          <div className="progres">
            <h3>
              Pips <span>{pipsy}</span>
            </h3>
            <div className="wyniki-bar">
              <span></span>
            </div>
          </div>

          <div className="progres">
            <h3>
              Obrót w lotach <span>{obrot}</span>
            </h3>
            <div className="wyniki-bar">
              <span></span>
            </div>
          </div>

          <div className="progres">
            <h3>
              Wynik w dniu: <span>{dataWyjsciowa}</span>
            </h3>
            <div className="wyniki-bar">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
