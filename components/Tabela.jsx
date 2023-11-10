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

  return (
    <div className="wrapper">
      <table>
        <caption>
            Wyniki
        </caption>
        <thead>
          <tr>
            <th>Nazwa</th>
            <th>Procent</th>
            <th>Stan Konta</th>
          </tr>
        </thead>
        <tbody>
          {konkurs_dane.map((item) => (
            <tr key={item.id}>
              <td>{item.imie}</td>
              <td>{item.procent_all}</td>
              <td>{item.stan_konta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
