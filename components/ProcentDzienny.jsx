

import dotenv from 'dotenv';
dotenv.config();



async function getProcentDzienny() {

    const database2 = process.env.API_URL_procentDzienny

    const res = await fetch(`${database2}`,{
        next: {
            revalidate: 900
        }
    })
  

    return res.json()
  }




  export default async function ProcentDzienny() {

  const wyniki = await getProcentDzienny()

  
  const lastIndex = wyniki.dailyGain.length - 1;



  
  
  
  
  const procent = wyniki.dailyGain[lastIndex][0].value
  const zysk = wyniki.dailyGain[lastIndex][0].profit
  const kalendarz = wyniki.dailyGain[lastIndex][0].date
  
  
  
  
  
  // Przekształcenie daty z formatu "miesiąc-dzień-rok" na "DD-MM-YYYY"
  const [miesiac, dzien, rok] = kalendarz.split("/");
  const dataWyjsciowa = `${dzien}-${miesiac}-${rok}`;
  

  return (
      <>
      <p>
        {procent} %
      </p>
    
    </>
  )
}
