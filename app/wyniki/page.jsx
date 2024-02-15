import Podsumowanie from "../wyniki/podsumowanie.jsx"
import Dzienne from "../wyniki/dzienne.jsx"
import Widget from "@/components/Widget.jsx"
import ListProfits from "@/components/ListProfits.jsx"
import Historia from "../../components/Historia.jsx"

export default function Wyniki() {
  return (
    <section className="wyniki" id="wyniki">
      <h2 className="heading">
        Moje <span>wyniki</span>
      </h2>

      <div className="wyniki-row">
        {<Podsumowanie />}

        {<Dzienne />}
        {<Historia/>}
      </div>

      <div className="wyniki-row">
        <div className="wyniki-column">{<Widget />}</div>
      </div>

      <div className="wyniki-row">
        <div className="wyniki-column">{<ListProfits />}</div>
      </div>
    </section>
  )
}
