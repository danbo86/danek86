import { Suspense } from "react"
import Loading from "@/app/konkurs_Zello/loading.js"
import Live from "./Live.jsx"

export default function Blog() {
  return (
    <section className="blog" id="blog">
      <h2 className="heading">
        Konkurs Forex <span>Trading</span>
      </h2>
      <div className="blog-column">
        <div className="blog-box">
          <div className="blog-content">
            <div className="content konkurs">
              <div className="konkurs-h1">
                <h1>
                  Zaproszenie do Nieformalnego Wyzwania Handlowego na Forex
                </h1>
              </div>
              <div>
                <h2>Drogi Traderze,</h2>

                <p>
                  Z przyjemnością chcemy Cię zaprosić do udziału w Nieformalnym
                  Wyzwaniu Handlowym na rynku Forex! Jeśli kochasz świat handlu,
                  zdobywanie nowych doświadczeń i dzielenie się wiedzą z innymi
                  traderami,to to wyzwanie jest dla Ciebie.
                </p>
              </div>

              <div>
                <h3>O co chodzi?</h3>
                <p>
                  Nieformalne Wyzwanie Handlowe to okazja do nieoficjalnej
                  rywalizacji z innymi traderami, aby sprawdzić swoje
                  umiejętności i osiągnięcia na rynku Forex. Bez formalności,
                  bez zobowiązań, po prostu dziel się swoimi doświadczeniami i
                  czerp inspirację od innych.
                </p>
              </div>

              <div>
                <h3>Jak wziąć udział?</h3>
                <ol>
                  <li>
                    Zarejestruj swoje konto handlowe na Forex Factory lub
                    Myfxbook
                  </li>
                  <li>
                    Dołącz do wyzwania, zgłaszając swoje konto jako uczestnika.
                  </li>
                  <li>
                    Handluj zgodnie ze swoją strategią i podejmuj decyzje
                    inwestycyjne.
                  </li>
                </ol>
              </div>

              <div>
                <h3>Dlaczego warto?</h3>
                <ol>
                  <li>
                    Możliwość dzielenia się swoimi osiągnięciami z innymi
                    traderami.
                  </li>
                  <li>Brak formalności i presji, czysta zabawa i nauka.</li>
                  <li>
                    Szansa na zainspirowanie innych i zdobycie nowych spojrzeń
                    na rynek.
                  </li>
                </ol>
              </div>

              <div>
                <h3>Terminy:</h3>
                <p>
                  Wyzwanie trwa od... do... wszystko zależy od Was. To czas,
                  abyś mógł sprawdzić siebie i być może zdobyć miejsce wśród
                  najlepszych traderów.
                </p>
              </div>

              <div>
                <h3>Jak dołączyć?</h3>
                <p>
                  Aby zgłosić swoje konto do udziału w wyzwaniu, napisz do mnie
                  w oplikacji Zello. W zakładce "kontakty" wyszukaj mój nick:
                  danbo86 i dodaj mnie do kontaktów.{" "}
                </p>
                <p>
                  Możesz także odezwać się na naszym kanale w aplikacji Zello.
                  Link do kanału:{" "}
                  <a href="https://zello.com/trading_hydepark">
                    <img src="./icons/Link.png" />
                  </a>
                </p>
              </div>

              <p>
                Rynek czeka na Ciebie! Dołącz do nas i podziel się swoją pasją
                do handlu.
              </p>

              <p>Z poważaniem,</p>
              <p>Danbo86</p>
            </div>
          </div>
        </div>
      </div>

      <div className="content"></div>
      {/* <Tabela /> */}
      <Suspense fallback={<Loading />}>
        <Live />
      </Suspense>
    </section>
  )
}
