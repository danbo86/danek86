import moment from 'moment';


async function getPodsumowanie() {
    const res = await fetch('https://www.myfxbook.com/api/get-my-accounts.json?session=CVNg8fsx4UoiyVxlqPdM3345123',{
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

    console.log(procent)

    



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
                <h3>Aktualizacja na dzień: <span>{moment(wyniki.accounts[1].lastUpdateDate).format("DD-MM-YYYY HH:mm")}</span></h3>
                <div className="wyniki-bar"><span></span></div>
              </div>

            </div>
          </div>

        </div>
    </>
  )
}