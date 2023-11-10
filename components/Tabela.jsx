import { supabaseTransakcje } from "../app/api/supabaseClientTransakcje"

const konkurs = async () => {
  try {
    let { data, error } = await supabaseTransakcje.from("konkurs").select("*")
    if (data) {
      return data
    }
  } catch (error) {
    console.log(error)
    // throw new Error(error.message);
  }
}

export default async function Tabela() {
  const konkurs_dane = await konkurs()

  // Sortowanie danych według procent_all (liczby zmiennoprzecinkowe)
  konkurs_dane.sort((a, b) => b.procent_all - a.procent_all)

  console.log(konkurs_dane)

  return (
    <div className="wrapper">
      <table>
        <caption>Wyniki</caption>
        <thead>
          <tr>
            <th>Nick</th>
            <th>Procent</th>
            <th>Balance</th>
            <th>Equity</th>
          </tr>
        </thead>
        <tbody>
          {konkurs_dane.map((item) => (
            <tr key={item.id}>
              <td data-cell="Nick">{item.imie}</td>
              <td data-cell="Procent">{item.procent_all} %</td>
              <td data-cell="Balance">{item.stan_konta} USD</td>
              <td data-cell="Equity">{item.equity} USD</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
