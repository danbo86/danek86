import { supabaseTransakcje } from "../app/api/supabaseClientTransakcje"
import dynamic from "next/dynamic"
const DynamicWykresApex = dynamic(() => import("./WykresApex"), { ssr: false })

const getswap = async () => {
  try {
    let { data: swap, error } = await supabaseTransakcje
      .from("transakcje")
      .select("Swap")
    if (swap) {
      return swap
    }
  } catch (error) {
    console.log(error)
    // throw new Error(error.message);
  }
}

const getTransakcje = async () => {
  try {
    let { data: transakcje, error } = await supabaseTransakcje
      .from("transakcje")
      .select("Profit")
    if (transakcje) {
      // console.log(transakcje)
      return transakcje
    }
  } catch (error) {
    console.log(error)
    // throw error
  }
}

export default async function ListProfits() {
  const alltransakcje = await getTransakcje()
  const allswap = await getswap()

  // Sprawdzenie, czy obie tablice mają taką samą długość
  if (alltransakcje.length === allswap.length) {
    // Sumowanie zysków i swapów
    const summedData = alltransakcje.map((transaction, index) => {
      // Dodawanie Swap z zaokrągleniem do dwóch miejsc po przecinku
      const roundedSwap =
        allswap[index].Swap !== null ? allswap[index].Swap.toFixed(2) : null
      // Dodawanie Profit z zaokrągleniem do dwóch miejsc po przecinku
      const roundedProfit =
        transaction.Profit !== null ? transaction.Profit.toFixed(2) : null

      return {
        Profit: parseFloat(roundedProfit) + parseFloat(roundedSwap),
      }
    })

    // Obliczanie skumulowanego zysku
    let cumulativeProfit = 0
    const skumulowaneProfity = summedData.map((transaction) => {
      cumulativeProfit += transaction.Profit
      return cumulativeProfit.toFixed(2)
    })

    // Wyświetlenie wyników
    // console.log('Suma zysków i swapów:', summedData);
    console.log(skumulowaneProfity)

    return <DynamicWykresApex profits2={skumulowaneProfity} />
  }
}
