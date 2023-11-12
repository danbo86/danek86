import { supabaseTransakcje } from "../app/api/supabaseClientTransakcje"
const csv = require("csv-parser")
import { createReadStream } from "node:fs"
import Link from "next/link"

const konkurs = async () => {
  try {
    let { data, error } = await supabaseTransakcje.from("konkurs").select("*")
    if (data) {
      return data
    }
  } catch (error) {
    console.log(error)
  }
}

// // Ścieżka do pliku CSV
// const csvFilePath = "./app/daneFF.csv"

// // Nazwa tabeli w Supabase, do której chcesz przesłać dane
// const tableName = "konkurs"

// // Funkcja do przesyłania danych do Supabase
// const uploadDataToSupabase = async () => {
//   try {
//     // Otwórz strumień do odczytu plik CSV
//     const stream = createReadStream(csvFilePath)
//       .pipe(csv())
//       .on("data", async (row) => {
//         // results.push(row)

//         // aktualizacja danych do tabeli w Supabase
//         const { data, error } = await supabaseTransakcje
//           .from(tableName)
//           .update({
//             stan_konta: row.stan_konta,
//             procent_all: row.procent_all,
//             equity: row.equity,
//             imie: row.imie,
//           })
//           .eq("id", row.id)
//         if (error) {
//           console.error("Error inserting data:", error.message)
//         } else {
//           console.log("Data inserted successfully:")
//         }
//       })
//       .on("end", () => {
//         console.log("CSV file successfully processed.")
//       })
//   } catch (error) {
//     console.error("Error uploading data to Supabase:", error.message)
//   }
// }

// // Wywołaj funkcję przesyłania danych do Supabase
// uploadDataToSupabase()

export default async function Tabela() {
  const konkurs_dane = await konkurs()

  // Sortowanie danych według procent_all (liczby zmiennoprzecinkowe)
  konkurs_dane.sort((a, b) => b.procent_all - a.procent_all)

  // console.log(konkurs_dane)

  return (
    <>
      <div className="wrapper">
        <table>
          <caption>Wyniki</caption>
          <thead>
            <tr>
              <th>Nick</th>
              <th>Procent</th>
              <th>Balance</th>
              <th>Equity</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {konkurs_dane.map((item) => (
              <tr key={item.id}>
                <td data-cell="Nick">{item.imie}</td>
                <td data-cell="Procent">{item.procent_all} %</td>
                <td data-cell="Balance">{item.stan_konta} USD</td>
                <td data-cell="Equity">{item.equity} USD</td>
                <td data-cell="Link">
                  <Link className="link-url" target="_blank" href={item.url}>
                    Forex Factory
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
