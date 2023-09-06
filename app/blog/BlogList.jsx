import { BsCalendarEvent } from 'react-icons/bs';

import Link from "next/link";

 
 
 async function getWpisy() {
    const res = await fetch('http://localhost:4000/wpisy', {
      next: {
        revalidate: 5
      }
    })
    // const res = await fetch('./_data/db.json')
    
    return res.json()
}

export default async function BlogList() {

    const wpisy = await getWpisy()
    console.log(wpisy)


  return (
   <>
    {wpisy.map((wpis) => (
    <div key={wpis.id} className="blog-box">
      <div  className="blog-content">
        <Link href='/' className='linek'>
          <div className="content">
            <div className="year"><BsCalendarEvent className='kalendarz'/>{wpis.data}</div>
            <h3>{wpis.title}</h3>
            <p>{wpis.body.slice(0,150)}...</p>
          </div>
        </Link>
      </div>
    </div>
    ))}
    {wpisy.length === 0 && (
        <p>Nie ma narazie żadnych wpisów</p>
       
    ) }
   
   </>
  )
}