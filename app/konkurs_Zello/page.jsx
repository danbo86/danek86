import Tabela from "@/components/Tabela"

export default function Blog() {
  return (
    <section className="blog" id="blog">
      <h2 className="heading">
        Konkurs <span>Zello</span>
      </h2>

      <div className="blog-row">
        <div className="blog-column">
          <div className="blog-box">
            <Tabela />
          </div>
        </div>
      </div>
    </section>
  )
}
