"use client"
import { useEffect, useState } from "react";
import { supabaseTransakcje } from "../api/supabaseClientTransakcje";
import Link from "next/link";

const Tabela = () => {
  const [konkurs_dane, setKonkursDane] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data, error } = await supabaseTransakcje.from("wyniki").select("*");
        if (data) {
          setKonkursDane(data);
        }
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  }, []); // Pusta tablica dependency sprawia, że useEffect uruchamia się tylko raz po zamontowaniu komponentu
  
  // Sortowanie danych według procent_all (liczby zmiennoprzecinkowe)
  konkurs_dane.sort((a, b) => b.procent_all - a.procent_all);
  console.log(konkurs_dane);
  
  
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
  );
};

export default Tabela;
