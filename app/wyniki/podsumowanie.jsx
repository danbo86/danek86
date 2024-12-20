import dotenv from "dotenv"
dotenv.config()

async function getPodsumowanie() {
  const database = process.env.API_URL_podsumowanie

  // const apiUrl = process.env.APi_URL_podsumowanie
  const res = await fetch(`${database}`, {
    next: {
      revalidate: 900,
    },
  })

  return res.json()
}

export default async function Podsumowanie() {
  const wyniki = await getPodsumowanie()
  // zmiana numeru w nawiasie kwadratowym zmienia konto z myfxbooka do wyświetlenia
  const stanKonta = wyniki.accounts[2].balance

  // console.log(wyniki)

  const obliczProcent = (obecnaWartosc, maxWartosc) => {
    return (obecnaWartosc / maxWartosc) * 100
  }
  const maksymalnaWartosc = 1000000
  const procent = obliczProcent(stanKonta, maksymalnaWartosc)

  const dataWejsciowa = wyniki.accounts[2].lastUpdateDate
  // Rozdzielamy datę na części
  const [dataCzas, godzinaMinuta] = dataWejsciowa.split(" ")
  const [miesiac, dzien, rok] = dataCzas.split("/")
  const [godzina, minuta] = godzinaMinuta.split(":")

  // Tworzymy datę w nowym formacie
  const dataWyjsciowa = `${dzien}-${miesiac}-${rok} ${godzina}:${minuta}`

  return (
    <>
      <div className="wyniki-column">
        <div className="title-div">
          <h3 className="title">
            Podsumowanie konta: {wyniki.accounts[2].name}
          </h3>
        </div>

        <div className="wyniki-box">
          <div className="wyniki-content">
            <div className="progres">
              <h3>
                Stan konta <span>{wyniki.accounts[2].balance} USD</span>
              </h3>
              <div className="wyniki-bar">
                <span style={{ width: `${procent}%` }}></span>
              </div>
            </div>

            <div className="progres">
              <h3>
                Stan konta equity <span>{wyniki.accounts[2].equity} USD</span>
              </h3>
              <div className="wyniki-bar">
                <span></span>
              </div>
            </div>

            <div className="progres">
              <h3>
                Suma wpłat <span>{wyniki.accounts[2].deposits} USD</span>
              </h3>
              <div className="wyniki-bar">
                <span></span>
              </div>
            </div>

            <div className="progres">
              <h3>
                Suma wypłat <span>{wyniki.accounts[2].withdrawals} USD</span>
              </h3>
              <div className="wyniki-bar">
                <span></span>
              </div>
            </div>

            <div className="progres">
              <h3>
                Zysk % <span>{wyniki.accounts[2].absGain} %</span>
              </h3>
              <div className="wyniki-bar">
                <span></span>
              </div>
            </div>

            <div className="progres">
              <h3>
                Zysk w Usd<span>{wyniki.accounts[2].profit} USD</span>
              </h3>
              <div className="wyniki-bar">
                <span></span>
              </div>
            </div>

            <div className="progres">
              <h3>
                Aktualizacja na dzień: <span>{dataWyjsciowa}</span>
              </h3>
              <div className="wyniki-bar">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
