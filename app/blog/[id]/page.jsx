
import { BsCalendarEvent } from 'react-icons/bs';
import { notFound } from "next/navigation"
import { supabase } from '@/app/api/supabaseClient';
import Image from 'next/image'


export const dynamicParams = true

export async function genereteMetadata({params}) {

  const {data: wpis } = await supabase.from('smoothies')
    .select()
    .eq('id', params.id)
    .single()

  return {
    title: `Danbo86 | ${wpis?.title || 'Nie znaleziono'} `
  }
}

async function getBlogDetails(id) {
    // return await ( await fetch("http://localhost:4000/wpisy/" + id ,{
    //     next: {revalidate: 60}
    // })).json();

    const {data} = await supabase.from('smoothies')
      .select()
      .eq('id', id)
      .single()

    if (!data){
      notFound()
    }

    return data

  }



export default async function BlogDetails({params}) {

    const blog = await getBlogDetails(params.id);

  return (
    <section className="blog" id="blog">

    <h2 className="heading">
      Moje <span>wpisy</span>
    </h2>

    <div className="blog-row">

        <div className="blog-column">

            {/* <h3 className="title">{blog.title}</h3> */}

            <div className="blog-box">

                <div className="blog-content">
                    <div className="content">
                    <div className="year"><BsCalendarEvent className='kalendarz'/>{blog.time}</div>
                    <h3>{blog.tytul}</h3>
                    <p>{blog.body}</p>
                    
                    </div>
                </div>

            </div>

        </div>
          <Image
            className='img-gallery'
            src={blog.url}
            width={600}
            height={300}
            alt='obrazek'
          />

        <div className="blog-column">

            <h3 className="title">Transakcje</h3>

            <div className="blog-box">

        
            <div className="blog-content">
                
                    <div className="content">
                        <div className="year"><BsCalendarEvent className='kalendarz'/>2017 - 2018</div>
                        <h3>Master degree- uniwersity</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aliquid. Nobis, officia deleniti. Qui explicabo illum a. Quae, expedita! Quaerat.</p>
                        <img src={blog.images_url} alt="" />
                    </div>
                
          </div>

          

        </div>

      </div>



    </div>

  </section>
  )
}