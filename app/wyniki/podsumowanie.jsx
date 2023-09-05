

async function getPodsumowanie() {

    const apiUrl = process.env.API_URL_podsumowanie
    const res = await fetch(apiUrl,{
        next: {
            revalidate: 3600
        }
    })

    return res.json()
}


export default async function Podsumowanie() {

    const wyniki = await getPodsumowanie();
    const stanKonta = wyniki.accounts[1].balance;


    const obliczProcent = (obecnaWartosc, maxWartosc) => {
      return (obecnaWartosc / maxWartosc) * 100;
    };
    const maksymalnaWartosc = 1000000;
    const procent = obliczProcent(stanKonta, maksymalnaWartosc);

 

   

    const dataWejsciowa = wyniki.accounts[1].lastUpdateDate

    // Rozdzielamy datę na części
    const [dataCzas, godzinaMinuta] = dataWejsciowa.split(' ');
    const [miesiac, dzien, rok] = dataCzas.split('/');
    const [godzina, minuta] = godzinaMinuta.split(':');

    // Tworzymy datę w nowym formacie
    const dataWyjsciowa = `${dzien}-${miesiac}-${rok} ${godzina}:${minuta}`;

   
    

  return (
    <>
    
    
    <div className="wyniki-column">

          <h3 className="title">Podsumowanie konta:  {wyniki.accounts[1].name}</h3>

          <div className="wyniki-box">
            <div className="wyniki-content">

              <div className="progres">
                <h3>Stan konta <span>{wyniki.accounts[1].balance} USD</span></h3>
                <div className="wyniki-bar"><span style={{ width: `${procent}%` }}></span></div>
              </div>

              <div className="progres">
                <h3>Stan konta equity <span>{wyniki.accounts[1].equity} USD</span></h3>
                <div className="wyniki-bar"><span></span></div>
              </div>

              <div className="progres">
                <h3>Suma wpłat <span>{wyniki.accounts[1].deposits}</span></h3>
                <div className="wyniki-bar"><span></span></div>
              </div>
              
              <div className="progres">
                <h3>Suma wypłat <span>{wyniki.accounts[1].withdrawals}</span></h3>
                <div className="wyniki-bar"><span></span></div>
              </div>

              <div className="progres">
                <h3>Zysk % <span>{wyniki.accounts[1].absGain}</span></h3>
                <div className="wyniki-bar"><span></span></div>
              </div>

              <div className="progres">
                <h3>Zysk w Usd<span>{wyniki.accounts[1].profit}</span></h3>
                <div className="wyniki-bar"><span></span></div>
              </div>
              
              <div className="progres">
                <h3>Aktualizacja na dzień: <span>{dataWyjsciowa}</span></h3>
                <div className="wyniki-bar"><span></span></div>
              </div>

            </div>
          </div>

        </div>
    </>
  )
}