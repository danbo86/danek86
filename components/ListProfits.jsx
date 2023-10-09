// "use client"
import { supabaseTransakcje } from '../app/api/supabaseClientTransakcje';
import WykresApp from './WykresApp';

const getswap = async () => {
    try {
      let { data: swap, error } = await supabaseTransakcje
        .from('transakcje')
        .select('Swap')
      if ( swap ) {
        // console.log(transakcje)
        return swap
      }
    }   
    catch (error) {
      console.log(error)
    }
  }


const getTransakcje = async () => {
    try {
      let { data: transakcje, error } = await supabaseTransakcje
        .from('transakcje')
        .select('Profit')
      if ( transakcje ) {
        // console.log(transakcje)
        return transakcje
      }
    }   
    catch (error) {
      console.log(error)
    }
  }


  export default async function ListProfits() {

    const alltransakcje = await getTransakcje()
    const allswap = await getswap()
  
    // console.log(alltransakcje.map( profit => profit.Profit))
    // console.log(allswap.map( profit => profit.Swap))

    // w tej funkcji musze jeszcze dodać swapy do profitu z bazy danych 
  //   function skumulowanyProfit(){

  //     let cumulativeProfit = 0;

  //     const Profity = alltransakcje.map( (profit) => {

  //       cumulativeProfit += profit.Profit

  //       return cumulativeProfit
  //     }
  //  )
  //         return Profity
  //   }

      // Sprawdzenie, czy obie tablice mają taką samą długość
  if (alltransakcje.length === allswap.length) {
    // Sumowanie zysków i swapów
    const summedData = alltransakcje.map((transaction, index) => {
      
       // Dodawanie Swap z zaokrągleniem do dwóch miejsc po przecinku
      const roundedSwap = allswap[index].Swap !== null ? allswap[index].Swap.toFixed(2) : null;
      // Dodawanie Profit z zaokrągleniem do dwóch miejsc po przecinku
      const roundedProfit = transaction.Profit  !== null ? transaction.Profit.toFixed(2) : null;

      
      return {
        // Profit: transaction.Profit + allswap[index].Swap,
        Profit: (parseFloat(roundedProfit) + parseFloat(roundedSwap)),
      };
    });

    // Obliczanie skumulowanego zysku
    let cumulativeProfit = 0;
    const skumulowanyProfity = summedData.map((transaction) => {
      cumulativeProfit += transaction.Profit;
      return cumulativeProfit;
    });

    // Wyświetlenie wyników
    console.log('Suma zysków i swapów:', summedData);
    console.log('Skumulowany zysk:', skumulowanyProfity);

  return (
    <WykresApp profits2={skumulowanyProfity}/>
  )}}
