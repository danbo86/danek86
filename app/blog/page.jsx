import { BsCalendarEvent } from 'react-icons/bs';
import Link from "next/link";
import BlogList from'./BlogList.jsx'

export default function Blog() {
  return (
    <section className="blog" id="blog">

      <h2 className="heading">
        Moje <span>wpisy</span>
      </h2>

      <div className="blog-row">

        <div className="blog-column">

          <h3 className="title">Blog</h3>

         

            <BlogList/>
        
           
          

        </div>

        <div className="blog-column">

          <h3 className="title">Artykuły</h3>

          <div className="blog-box">

          
            <div className="blog-content">
            <Link href="/" className='linek'>
              <div className="content">
                <div className="year"><BsCalendarEvent className='kalendarz'/>2017 - 2018</div>
                <h3>Master degree- uniwersity</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aliquid. Nobis, officia deleniti. Qui explicabo illum a. Quae, expedita! Quaerat.</p>
              </div>
            </Link>
            </div>

            <div className="blog-content">
              <div className="content">
                <div className="year"><BsCalendarEvent className='kalendarz'/>2018 - 2019</div>
                <h3>Master degree- uniwersity</h3>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aliquid. Nobis, officia deleniti. Qui explicabo illum a. Quae, expedita! Quaerat.</p>
              </div>
            </div>

            <div className="blog-content">
              <div className="content">
                <div className="year"><BsCalendarEvent className='kalendarz'/>2019 - 2020</div>
                <h3>Master degree- uniwersity</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aliquid. Nobis, officia deleniti. Qui explicabo illum a. Quae, expedita! Quaerat.</p>
              </div>
            </div>

          </div>

        </div>



      </div>

    </section>
  )
}