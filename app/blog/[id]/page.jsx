import { BsCalendarEvent } from "react-icons/bs"
import { supabase } from "@/app/api/supabaseClient"
import Image from "next/image"

export const dynamicParams = true

export async function generateMetadata({ params }) {
  const { data: wpis } = await supabase
    .from("smoothies")
    .select()
    .eq("id", params.id)
    .single()

  let title = "Danbo86"
  if (wpis) {
    title += ` | ${wpis.tytul}`
  } else {
    title += " | Nie znaleziono"
  }

  return {
    // title: `Danbo86 | ${wpis?.title || 'Nie znaleziono'} `
    title,
  }
}

async function getBlogDetails(id) {
  const { data } = await supabase
    .from("smoothies")
    .select()
    .eq("id", id)
    .single()

  if (!data) {
    console.log("No blog details")
  }

  return data
}

export default async function BlogDetails({ params }) {
  const blog = await getBlogDetails(params.id)

  return (
    <section className="blog" id="blog">
      <h2 className="heading">
        Moje <span>wpisy</span>
      </h2>

      <div className="blog-row-wpis">
        <div className="blog-column">
          <div className="blog-box">
            <div className="blog-content">
              <div className="content">
                <div className="year">
                  <BsCalendarEvent className="kalendarz" />
                  {blog.time}
                </div>
                <h3>{blog.tytul}</h3>
                <p>{blog.body}</p>
                <p>{blog.body1}</p>
              </div>
            </div>
          </div>
        </div>

        {Array.isArray(blog.url) &&
          blog.url.map((url, index) => (
            <div className="blog-column" key={index}>
              <Image
                key={index}
                className="img-gallery"
                src={url}
                width={600}
                height={300}
                alt=""
              />
            </div>
          ))}
      </div>
    </section>
  )
}
