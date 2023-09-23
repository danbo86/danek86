import Image from 'next/image'
import Link from "next/link"

export default function Kontakt() {
  return (
    
    <section className="contact" id="contact">
      <h2 className="heading">Kontakt <span>do mnie</span></h2>

      <form action="#">

        <div className="input-box">

          <div className="input-field">
            <input type="text" placeholder="Imię" required/>
            <span className="focus"></span>
          </div>

          <div className="input-field">
            <input type="text" placeholder="Nazwisko" required/>
            <span className="focus"></span>
          </div>

        </div>
        
        <div className="input-box">

          <div className="input-field">
            <input type="email" placeholder="Email" required/>
            <span className="focus"></span>
          </div>

          {/* <div className="input-field">
            <input type="text" placeholder="email" required/>
            <span className="focus"></span>
          </div> */}


        </div>

        <div className="textarea-field">
          <textarea name="" id="" cols="30" rows="10" placeholder="Twoja wiadomość" required></textarea>
          <span className="focus"></span>
        </div>

        <div className="btn-box btns">
          <button type="submit" className="btn">Wyślij</button>
        </div>

        <div className='kontakt-zello'>
          <p className='kontakt-h3'>Kontakt na zello: <br /> zeskanuj kod QR lub kliknij w ikone Zello</p>
          <br />
          <div>
            <Image
              src={'/images/zello_qr.jpg'}
              layout="responsive" // Ustawienie na "responsive" zapewni responsywność
              width={100}
              height={100}
              objectFit="contain" // Dostosuj objectFit do swoich preferencji
              alt="Zello QR Code"
              className='qr-code'
            />
          </div>
        </div>

      </form>

          <div className="zello-box">
              <Link 
                href='https://zello.page/GovTUmp6d6sEJxU19' 
                className="link-zello"
                target='_blank'>
                  <img 
                    src="/icons/zello.png" 
                    alt="logo-zello"  
                    className="ikona-zello"
                  />
              </Link>
            </div>

    </section>

  )
}