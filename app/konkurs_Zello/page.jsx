import { Suspense } from "react"
import Live from "./Live.jsx"
import Loading from "@/app/konkurs_Zello/loading.js"

export default function Blog() {
  return (
    <section className="blog" id="blog">
      <h2 className="heading">
        Konkurs <span>Zello</span>
      </h2>
      {/* <Tabela /> */}
      <Suspense fallback={<Loading />}>
        <Live />
      </Suspense>
    </section>
  )
}
