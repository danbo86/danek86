import { supabaseTransakcje } from "../api/supabaseClientTransakcje"

import Link from "next/link"

export default async function Tabela() {
  const konkurs = async () => {
    try {
      let { data, error } = await supabaseTransakcje.from("wyniki").select("*")
      if (data) {
        return data
      }
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  const konkurs_dane = await konkurs()

  // Sortowanie danych według procent_all (liczby zmiennoprzecinkowe)
  konkurs_dane.sort((a, b) => b.procent_all - a.procent_all)

  console.log(konkurs_dane)
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
