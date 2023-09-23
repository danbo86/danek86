import Link from 'next/link'
import { use} from "react"
import { BsCalendarEvent } from 'react-icons/bs';
import { supabase } from '../api/supabaseClient';

async function getBlogList() {

    let {data, error} = await supabase
      .from('smoothies')
      .select('')

      if (data) {
        // data.json()
        console.log(data)
      }

      if (error) {error.message}

      return data
}

export default async function BlogList() {

  const allwpisy = await getBlogList()


return (
          <>
            {allwpisy ? (
              allwpisy.map(wpis => (
                <div className="blog-content" key={wpis.id}>
                  <Link href={`/blog/${wpis.id}`} className='linek'>
                    <div className="content">
                      <div className="year"><BsCalendarEvent className='kalendarz'/>{wpis.time}</div>
                      <h3>{wpis.tytul}</h3>
                      <p>{wpis.body}</p>
                      {/* Dodaj inne dane zgodnie z ich rzeczywistymi nazwami kluczy */}
                    </div>
                  </Link>
                </div>
                
              ))
              ) : (
                <p>Brak danych do wyświetlenia.</p>
                )}
          </>
        )
  
}