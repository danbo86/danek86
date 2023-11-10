import BlogList from "./BlogList"

export default function Blog() {
  return (
    <section className="blog" id="blog">
      <h2 className="heading">
        Moje <span>wpisy</span>
      </h2>

      <div className="blog-row">
        <div className="blog-column">
          <h3 className="title">Blog</h3>

          <div className="blog-box">
            <BlogList />
          </div>
        </div>
      </div>
    </section>
  )
}
