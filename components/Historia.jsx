import dotenv from "dotenv"
dotenv.config()

async function getHistoria() {
  const database2 = process.env.API_URL_Historia

  const res = await fetch(`${database2}`, {
    next: {
      revalidate: 900,
    },
  })

  return res.json()
}

export default async function Historia() {
  const historia = await getHistoria()

  //   console.log(historia)

  //   historia.history.forEach((transaction) => {
  //     console.log("Symbol:", transaction.symbol)
  //     console.log("Symbol:", transaction.action)
  //     console.log("Symbol:", transaction.profit)
  //   })

  const dataWejsciowa = historia.history.map((date) => date.closeTime)

  // console.log(dataWejsciowa)
  const formattedDates = dataWejsciowa.map((inputDate) => {
    const [datePart, timePart] = inputDate.split(" ")
    const [month, day, year] = datePart.split("/")
    const [hours, minutes] = timePart.split(":")

    // Tablica z nazwami miesięcy
    const months = [
      "stycznia",
      "lutego",
      "marca",
      "kwietnia",
      "maja",
      "czerwca",
      "lipca",
      "sierpnia",
      "września",
      "października",
      "listopada",
      "grudnia",
    ]

    // Przekształcenie daty na oczekiwany format
    return `${day} ${
      months[parseInt(month, 10) - 1]
    } ${year} ${hours}:${minutes}`
  })

  //   console.log(formattedDates)

  const TransactionTable = () => (
    <table>
      <thead>
        <tr>
          <th>Nr</th>
          <th>Symbol</th>
          <th>BUY/SEL</th>
          <th>Profit</th>
          <th>Data zamknięcia</th>
        </tr>
      </thead>
      <tbody>
        {historia.history.map((transaction, index) => (
          <tr key={index}>
            <td data-cell="Nr" className="historia_row">
              {index + 1}
            </td>
            <td data-cell="Symbol" className="historia_row">
              {transaction.symbol}
            </td>
            <td data-cell="Buy/sell" className="historia_row">
              {transaction.action}
            </td>
            <td data-cell="Profit" className="historia_row">
              {transaction.profit} USD
            </td>
            <td data-cell="Data zamknięcia" className="historia_row">
              {formattedDates[index]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )

  // const lastIndex = historia.dataDaily.length - 1

  // const dataWejsciowa = wyniki.dataDaily[lastIndex][0].date

  // Przekształcenie daty z formatu "miesiąc-dzień-rok" na "DD-MM-YYYY"
  // const [miesiac, dzien, rok] = dataWejsciowa.split("/")
  // const dataWyjsciowa = `${dzien}-${miesiac}-${rok}`

  return (
    <div className="wyniki-column">
      <h3 className="title">Ostatnie transakcje:</h3>

      <div className="wyniki-box">
        <div className="wyniki-content">{TransactionTable()}</div>
      </div>
    </div>
  )
}
