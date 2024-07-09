"use client"

import { useEffect, useState } from "react"
import { supabaseTransakcje } from "../api/supabaseClientTransakcje"
import Link from "next/link"

const Tabela = () => {
  const [konkurs_dane, setKonkursDane] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rowNumber = [6, 17, 28, 34, 46, 57, 68, 73, 74, 75]

        // const columnName = "4"

        let { data, error } = await supabaseTransakcje
          .from("live2")
          .select("*")
          .in("id", rowNumber)

        if (data) {
          setKonkursDane(data)
          setKonkursDane((prevData) =>
            [...prevData].sort(
              (a, b) => parseFloat(b.procent) - parseFloat(a.procent),
            ),
          )
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, []) // Pobierz dane ponownie, gdy zmienią się identyfikatory użytkowników

  konkurs_dane.sort((a, b) => b.procent - a.procent)

  // console.log(konkurs_dane)

  return (
    <>
      <div className="wrapper">
        <table>
          <caption>Wyniki</caption>
          <thead>
            <tr>
              <th>Pozycja</th>
              <th>Nick</th>
              <th>Procent</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {konkurs_dane.map((item, index) => (
              <tr key={item.id}>
                <td data-cell="Pozycja">{index + 1}</td>
                <td data-cell="Nick">{item.nick}</td>
                <td
                  data-cell="Procent"
                  className={
                    parseFloat(item.procent) >= 0 ? "positive" : "negative"
                  }
                >
                  {item.procent}
                </td>
                <td data-cell="Link">
                  <Link
                    className="link-url"
                    target="_blank"
                    href={item.link ? item.link : ""}
                  >
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

export default Tabela
