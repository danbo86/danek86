import ListProfits from '@/components/ListProfits'
import dotenv from 'dotenv';
dotenv.config();

async function getDaneApi() {

    const database2 = process.env.API_URL_Historia

    const res = await fetch(`${database2}`,{
        next: {
            revalidate: 900
        }
    })
  
    return res.json()
  }

  async function getPodsumowanie() {

    const database = process.env.API_URL_podsumowanie

  

    // const apiUrl = process.env.APi_URL_podsumowanie
    const res = await fetch(`${database}`,{
        next: {
            revalidate: 900
        }
    })

    return res.json()
}

export default async function Wykres() {

        const wynikiHistorii = await getDaneApi()
        const history = wynikiHistorii.history

        const wynikiPodsumowanie = await getPodsumowanie();
        const wyplaty = wynikiPodsumowanie.accounts[1].withdrawals
        const wplaty = wynikiPodsumowanie.accounts[1].deposits
        const saldoKonta = wynikiPodsumowanie.accounts[1].balance 
    
        const profit = wyplaty - wplaty + saldoKonta
    
    
        const profits2 = history.map((item) =>   

          item.profit
                
        );
     

    return (
        <>
          <div>

            <ListProfits/>

          </div>
        </>
    )
}